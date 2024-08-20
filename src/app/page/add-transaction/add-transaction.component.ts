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

    loading = true;
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
        this.result = 0;
        this.loading = false;
    }

    async getCategory(arr){
        this.loading = true;
        try {
            await this.rest.get_category().subscribe((data) => {
                this.loading = false;
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
        if (this.nominal == null) {
            this.nominal = 0
        } else {
            this.nominal = this.nominal
        }
        let numberVal = parseInt(this.nominal).toLocaleString();
        this.result = numberVal;
    }

    async save() {
        if (this.tipe == "" || this.kategori == "" || this.nominal == "" || this.nominal == null || this.nominal == 0) {
            this._snackBar.open('Kolom isian harus terisi semua', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            if (this.tipe == 0) {
                try {
                    await this.rest.save_transaction_in({
                        idCategory: this.kategori,
                        desc: this.desc,
                        amt: this.nominal
                    }).subscribe(async (data)=>{}); 
                } catch (error) {
                    console.log(error);
                }
                this.dialogRef.close(true);
            } else {
                try {
                    await this.rest.save_transaction_out({
                        idCategory: this.kategori,
                        desc: this.desc,                    
                        amt: this.nominal
                    }).subscribe(async (data)=>{}); 
                } catch (error) {
                    console.log(error);
                }
                this.dialogRef.close(true);
            }
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
