import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-add-transaction',
    templateUrl: './add-transaction.component.html',
    styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

    tipe;
    kategori;
    nominal;
    desc;
    result;
    dataCategory: any;

    constructor(
        public dialogRef: MatDialogRef<AddTransactionComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,
    ) { }

    ngOnInit(): void {
        this.result = 0
    }

    async getCategory(arr){
        try {
            await this.rest.get_category().subscribe((data) => {
                if (arr == 0) {
                    this.dataCategory = data['in'];
                } else {
                    this.dataCategory = data['out'];
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    separatorProcess(): void {
        let tempNominal;
        if (this.nominal == null) {
            this.nominal = 0
        } else {
            this.nominal = this.nominal
        }
        let numberVal = parseInt(this.nominal).toLocaleString();
        this.result = numberVal;
    }

    async save() {
        if (this.kategori == "" || this.nominal == "" || this.desc == "") {
            this._snackBar.open('Kolom isian harus terisi semua', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            if (this.kategori == 0) {
                try {
                    await this.rest.save_transaction_in({
                        desc: this.desc,                    
                        amt: this.nominal
                    }).subscribe(async (data)=>{}); 
                } catch (error) {
                    console.log(error);
                }
                this.dialogRef.close();
            } else {
                try {
                    await this.rest.save_transaction_out({
                        desc: this.desc,                    
                        amt: this.nominal
                    }).subscribe(async (data)=>{}); 
                } catch (error) {
                    console.log(error);
                }
                this.dialogRef.close();
            }
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
