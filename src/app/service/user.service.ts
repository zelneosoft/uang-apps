import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    message     = '';
    messageType = '';
    user: any   = {};
    keyUser     = '';
    idUser      = '';
    nameUser    = '';
    emailUser   = '';
    token:any;

    constructor(
        private router: Router, 
        private rest: ApiService
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                this.message = '';
                this.messageType = '';
            }
        });
    }
    error(message) {
        this.messageType = 'danger';
        this.message = message;
    }

    async getProfile() {
        if (localStorage.getItem('token') !== null){
            await this.rest.get_profile().subscribe((data) => {
                if(data['success']){
                    console.log(data);
                    // this.token = localStorage.getItem('token');
                    // this.user = data['data'];
                    // this.nameUser = this.user['user_name'].replace(/\w\S*/g,function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
                    // this.keyUser = this.user['user_name'].toUpperCase().slice(0,1);
                    // this.emailUser = this.user['user_email'];
                    // this.idUser = this.user['user_id'];
                }
            });
        }
    }
}
