import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-toolbar-main',
    templateUrl: './toolbar-main.component.html',
    styleUrls: ['./toolbar-main.component.css']
})
export class ToolbarMainComponent implements OnInit {

    constructor( public data: UserService) {
        this.data.getProfile()
    }

    ngOnInit(): void {
        console.log(this.data)
    }

    logout() {
        localStorage.clear();
        window.location.replace('/login');
    }

}
