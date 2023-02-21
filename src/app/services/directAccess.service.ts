import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DirectAccess implements CanActivate {

    constructor(private router: Router) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.router.url === '/task' ) {
            if (next.routeConfig!.path === 'editform/:id' ) {
                return true;
            }
        }
        this.router.navigate(['/task'])
        return false;
    }
}