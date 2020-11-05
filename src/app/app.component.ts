import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'uang-apps';

    constructor(
        public data: UserService
    ) {
        this.data.getProfile();
    }

    // logout(){
    //     localStorage.clear();
    //     window.location.replace('/login');
    // }
}
