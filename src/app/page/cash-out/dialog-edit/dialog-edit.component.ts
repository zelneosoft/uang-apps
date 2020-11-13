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

    kategori;
    desc;
    nominal;
    result;
    dataCategory: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataTransaction: any,
        public dialogRef: MatDialogRef<DialogEditComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,) { }

    async ngOnInit() {
        console.log(this.dataTransaction['outAmt'])
        this.nominal = this.dataTransaction['outAmt'];
        this.result = this.dataTransaction['outAmt'];
        try {
            await this.rest.get_category().subscribe((data) => {
                this.dataCategory = data['out'];
            })
        } catch (error) {
            console.log(error);
        }
    }

    separatorProcess(): void {
        if (this.nominal == null) {
            this.nominal = 0
        } else {
            this.nominal = this.nominal
        }
        let numberVal = parseInt(this.nominal).toLocaleString();
        this.result = numberVal;
    }

    delete() {

    }

    edit() {

    }

}
