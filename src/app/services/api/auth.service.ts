import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "src/app/model/user/user";
import { environment } from '../../../environments/environment';

import { StorageService } from "../storage.service";


@Injectable()
    
    
export class AuthService {
    private route = environment.apiServer;
    currentUser: User | undefined;
    userSubject = new BehaviorSubject<User | null>(null) ;
    permissionSubject = new BehaviorSubject<string [] | null>(null);

    constructor(
        private http: HttpClient,
        private storageService: StorageService,
      
    ) { }

    isAuthenticated = () => !!this.storageService.accessToken;

    // login(credential): Observable<any> {
    //     return this.http.post<any>(
    //         this.baseUrl + '/user/authen', JSON.stringify(credential)
    //     )
    //         .pipe(
    //             map(res => res),
    //             catchError(this.handleError)
    //         );
    // }

    login(emailName: string, passwordName: string, countryCode: string): Observable<any> {
        const endpoint = this.route + 'login';
        const myBody = { email: emailName, password: passwordName, country: countryCode };
        console.log(endpoint);
        console.log(myBody);
        return this.http.post<any>(endpoint, myBody).pipe(map((data: any) => {
            this.storageService.accessToken = data.accessToken;
            this.storageService.refreshToken = data.refreshToken;
            this.storageService.userCountry = countryCode;
            this.setAccessPermission(data.permissions);
            this.getProfile().subscribe(data => {
                this.storageService.userProfile = JSON.stringify(data);
                this.sendUser(data!);
            });
            console.log(data);
            return data;
        }));
    }

    refreshToken(): Observable<boolean> {
        const token = this.storageService.refreshToken;
        if (!token) {

            return throwError(false);
        }
        else {
            return this.getRefreshToken()
                .pipe(map(
                    (resp: any) => {
                        this.storageService.accessToken = resp.accessToken;
                        this.storageService.refreshToken = resp.refreshToken;
                        return true;
                    }
                ));
        }
    }

    getRefreshToken() {
        const token = this.storageService.refreshToken;

        if (!token)
            return throwError(false);

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        })
        const endpoint = this.route + 'token/refresh';
        return this.http.post(endpoint, null, { headers: headers });
    }

    logout(): Observable<boolean> {
        const endpoint = this.route + 'logout';
        return this.http.post(endpoint, null).pipe(
            map((data: any) => {
                // console.log('[AUTH SERVICE]: logout success');
                return true;
            })
        )
    }

    getProfile(): Observable<User | null> {
        const endpoint = this.route + 'profile';
        return this.http.get<User >(endpoint).pipe(
            tap(data => {
                this.currentUser = data;
                // console.log('[AUTH SERVICE] API GET PROFILE');
            }),
            catchError(this.handleError<User | null>('getProfile', null))
        )
    }

    sendUser(user: User) {
        // console.log('[SEND USER BY SUBJECT]: ', user);
        this.userSubject.next(user);
    }

    getUserBySubject(): Observable<User | null> {
        // console.log('[GET USER BY SUBJECT]', this.userSubject.asObservable());
        return this.userSubject.asObservable();
    }

    setAccessPermission(permission: string[]) {
        this.permissionSubject.next(permission);
    }

    getAccessPermission(): Observable<string[] | null> {
        return this.permissionSubject.asObservable();
    }

    forgetPassword(email: string, country: string): Observable<any> {
        const endpoint = this.route + 'password/forgot';
        const myBody = { email: email, country: country };

        return this.http.post(endpoint, myBody).pipe(
            map((data: any) => {
                // console.log('[AUTH SERVICE]: logout success');
                return data;
            })
        )
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

}