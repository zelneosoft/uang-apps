import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            return state.url.startsWith('/home')
                ? true
                : (this.router.navigate(['/login']), false);

        } else {
            return state.url.startsWith('/home')
                ? (this.router.navigate(['/login']), false)
                : true;
        }
    }
}
