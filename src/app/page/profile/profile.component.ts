import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    nama;

    constructor(
        public data: UserService
    ) {
        this.data.getProfile()
    }

    ngOnInit(): void {
        this.nama = this.data['userName'];
    }

}
