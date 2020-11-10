import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'uang-apps';

    constructor(
        public data: UserService
    ) {
        this.data.getProfile();
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && 
          outlet.activatedRouteData && 
          outlet.activatedRouteData['animationState'];
    }

    // logout(){
    //     localStorage.clear();
    //     window.location.replace('/login');
    // }
}
