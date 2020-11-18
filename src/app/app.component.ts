import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterOutlet } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { UserService } from './service/user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'uang-apps';

    constructor(
        public data: UserService,
        private swUpdate: SwUpdate,
        private _snackBar: MatSnackBar,
    ) {
        this.data.getProfile();
        swUpdate.available.subscribe(event => {
            const snack = this._snackBar.open("Versi terbaru telah tersedia","Update");
            snack.onAction().subscribe(()=>{
                window.location.reload();
            })
        });
    }

    prepareRoute(outlet: RouterOutlet) {
        return outlet && 
          outlet.activatedRouteData && 
          outlet.activatedRouteData['animationState'];
    }
}
