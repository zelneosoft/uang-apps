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

    userName    = '';
    userEmail   = '';
    userBio   = '';
    userPhone   = '';
    userPhoto   = '';
    userPin;
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
                    this.token = localStorage.getItem('token');
                    this.user = data['user'];
                    this.userName = this.user['userName'];
                    this.userEmail = this.user['userEmail'];
                    this.userBio = this.user['userBio'];
                    this.userPhone = this.user['userPhone'];
                    this.userPhoto = this.user['userPhotoUrl'];
                    this.userPin = this.user['userPin'];
                }
            });
        }
    }
}
