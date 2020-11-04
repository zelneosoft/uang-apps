import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    auth2: any;
    @ViewChild('openDialogGoogle', {static: true }) loginElement: ElementRef;
    
    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.subscribe(v => console.log(v));
        this.googleSDK();
    }
    prepareLoginButton() {
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
        (googleUser) => {
            let profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }, (error) => {
            console.log(JSON.stringify(error, undefined, 2));
        });
    }

    googleSDK() {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '773848106670-2g6b45578b954pcp5avdfkohotf8n95t.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                this.prepareLoginButton();
            });
        }
    
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    }

}
