import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, map, switchMap, take } from 'rxjs/operators';
import { PagedResult } from 'src/app/model/paged-result/paged-result';

import { AuthService } from '../api/auth.service';
import { StorageService } from '../storage.service';


@Injectable()
export class HttpResponseInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(
        private router: Router,
        private authService: AuthService,
        private storageService: StorageService,
        private injector: Injector,
        // private loaderService: LoaderService,
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(req).pipe(
            map(event => {
                if (event instanceof HttpResponse) {
                    if (event.headers.get("x-total-count")) {
                        return event.clone({
                            body: new PagedResult(event.body, parseInt(event.headers.get("x-total-count") || ''))
                        });
                    }

                    return event;
                }

                return event;
            }),
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    // if ((err.status === 401 && (!req.params || !req.params.get('refresh'))) || err.status === 403) {
                    //     return this.handle401Error(req, next);
                    // }

                    if (err.status === 401 || err.status === 403) {
                        return this.handle401Error(req, next);
                    }

                    if (err.error) {
                        return throwError(err.error);
                    }

                    return throwError({ ErrorMessage: "Application Error. Please report to our engineer." });
                }

                return throwError({ ErrorMessage: "Application Error. Please report to our engineer." });
            })
        );
    }

    private handle401Error(req: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;

            console.log('handle401 error not refreshing');
            return this.authService.refreshToken().pipe(switchMap(() => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next({});

                return next.handle(this.addToken(req));
            }),
                catchError((err: any) => {
                    console.log('handle401 refresh token error')
                    // this.loaderService.close();
                    // this.storageService.accessToken = null;
                    // this.storageService.refreshToken = null;
                    this.storageService.clear();
                    this.router.navigate(['login']);
                    return throwError(err.error);
                }));
        }
        else {
            console.log('handle401 error refreshing');
            return this.refreshTokenSubject.pipe(
                take(1),
                switchMap(() => {
                    return next.handle(this.addToken(req));
                }), catchError((err: any) => {
                    console.log('handle401 error refreshing error');
                    this.storageService.clear();
                    this.router.navigate(['login']);
                    return throwError(err.error);
                }));
        }
    }

    private addToken(request: HttpRequest<any>) {
        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${this.storageService.accessToken}`
            }
        });
    }
}
