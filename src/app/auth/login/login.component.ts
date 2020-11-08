import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    auth2: any;
    dataUser;
    link: string;
    @ViewChild('openDialogGoogle', {static: true }) loginElement: ElementRef;
    
    constructor(
        private rest: ApiService,
        public data: UserService,
        private router : Router,
        private zone: NgZone
        )
    {
        this.link = router['url'];
    }

    ngOnInit(): void {
        this.googleSDK();
    }

    googleSDK() {
        window['googleSDKLoaded'] = () => {
            window['gapi'].load('auth2', () => {
                this.auth2 = window['gapi'].auth2.init({
                    client_id: '773848106670-2g6b45578b954pcp5avdfkohotf8n95t.apps.googleusercontent.com',
                    // cookiepolicy: 'single_host_origin',
                    cookiepolicy: 'https://dazelpro.com/privacy',
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

    prepareLoginButton() {
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
        (googleUser) => {
            let profile = googleUser.getBasicProfile();
            // console.log('Token || ' + googleUser.getAuthResponse().id_token);
            this.dataUser = {
                userID : profile.getId(),
                userEmail : profile.getEmail(),
                userName : profile.getName(),
                userPhotoUrl : profile.getImageUrl(),
                userStatus: 0
            };
            this.login();
        }, (error) => {
            console.log(JSON.stringify(error, undefined, 2));
        });
    }

    async login() {
        try {
            await this.rest.auth_user(this.dataUser).subscribe(async (data) => {
                if (data["success"]) {
                    localStorage.setItem('token', data['token']);
                    this.zone.run(() => {
                        this.router.navigate(['/home']);
                        this.data.getProfile();
                    });
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

}
