import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-main-setting',
    templateUrl: './main-setting.component.html',
    styleUrls: ['./main-setting.component.css']
})
export class MainSettingComponent implements OnInit {

    versi;
    constructor() { 
        this.versi = environment.versiApp 
    }

    ngOnInit(): void {
    }

}
