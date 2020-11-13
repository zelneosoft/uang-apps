import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-dialog-edit',
    templateUrl: './dialog-edit.component.html',
    styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataTransaction: any,
        public dialogRef: MatDialogRef<DialogEditComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,) { }

    ngOnInit(): void {
        console.log(this.dataTransaction)
    }

}
