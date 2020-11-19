import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { DialogAboutComponent } from '../dialog-about/dialog-about.component';

@Component({
    selector: 'app-main-setting',
    templateUrl: './main-setting.component.html',
    styleUrls: ['./main-setting.component.css']
})
export class MainSettingComponent implements OnInit {

    versi;
    constructor(
        public dialog: MatDialog,
    ) { 
        this.versi = environment.versiApp 
    }

    ngOnInit(): void {
    }

    openDialogAbout() {
        this.dialog.open(DialogAboutComponent, {
            width: '400px'
        });
    }

}
