import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './api/auth.service';
import { catchError, map } from 'rxjs/operators';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    

    constructor(private storageService : StorageService,private router: Router,private authService : AuthService) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
        const url = state.url;
        const token = this.storageService.accessToken

    
            const loginStatus = this.checkLogin(url).pipe(
                map((e: any) => {
               
                    if (e) {
                        console.log('e', e)
                        this.router.navigate(['dashboard']);
                    
                    } 
               
                    //  return of(true);
                    // this.storageService.refreshToken = null;
             
              
                }), catchError((err: any) => {
                
                    console.log('Pipe map error: ', err);
                    // this.storageService.refreshToken = null;
                    // this.storageService.accessToken = null;
                    this.storageService.clear();
                    // if (err == false) {
                    //       console.log('Pipe map error: ', err);
                    //     this.router.navigate(['landing']);
                    // }
                    // this.router.navigate(['landing']);
                    return of(false);
                })
            );
            return loginStatus;
        } 
    

    private checkLogin(url: string): Observable<boolean> {
        
        if (this.authService.isAuthenticated()) {
            
            return of(true);
        } else {
           return this.authService.refreshToken();
            // if (refresh == of(true)) {
            //     // console.log('sdadadasds');
            //     // console.log(refresh);
            //     return this.authService.refreshToken();
            // }
            // else
            // {
            //     console.log('refresh', refresh)
            //     this.router.navigate(['landing']);
            //     return of(false);
            // }
        }
    }
}


