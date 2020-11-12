import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AnonymousService {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('token')) {
            return state.url.startsWith('/')
                ? (this.router.navigate(['/home']), false)
                : true

        } else {
            return state.url.startsWith('/')
                ? true
                : (this.router.navigate(['/home']), false)
        }
    }
}
