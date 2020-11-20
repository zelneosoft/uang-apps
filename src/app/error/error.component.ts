import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

    reason ='';
    status : any;
    admin: boolean;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: string,
        private router : Router,
        public dialogRef: MatDialogRef<ErrorComponent>
    ) { 
        // console.log(data)
        switch (data["status"]) {
            case 500:
                this.status = data["status"];
                this.logout();
                window.location.replace('/');
                break;
            
            default:
                this.status = data["status"];
                break;
        }
        this.reason = data["reason"];
    }

    ngOnInit() {
        console.log(this.status)
    }

    closedDialog(): void {
        this.dialogRef.close();
    }

    closeFailedLogin(): void {
        this.dialogRef.close();
        localStorage.clear();
        window.location.replace('/');
    }

    closeExpired(): void {
        this.dialogRef.close();
        localStorage.clear();
        window.location.replace('/');
    }

    logout(){
        localStorage.clear();
        window.location.replace('/');
    }

}
