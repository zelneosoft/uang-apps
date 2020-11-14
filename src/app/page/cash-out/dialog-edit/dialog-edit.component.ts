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

    id;
    kategori = '';
    desc = '';
    nominal;
    result;
    dataCategory: any;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataTransaction: any,
        public dialogRef: MatDialogRef<DialogEditComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,) { }

    async ngOnInit() {
        this.id = this.dataTransaction.outID;
        this.kategori = this.dataTransaction.categoryID;
        this.desc = this.dataTransaction.outDescription;
        this.nominal = this.dataTransaction.outAmt;
        this.result = this.dataTransaction.outAmt;
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

    async delete() {
        try {
            await this.rest.delete_transaction_out({
                id: this.id,
            }).subscribe(async (data)=>{
                this._snackBar.open('Satu histori berhasil dihapus', 'Oke', {
                    duration: 2000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            }); 
        } catch (error) {
            console.log(error);
        }
        this.dialogRef.close();
    }

    async edit() {
        if (this.kategori == "" || this.desc == "" || this.nominal == "" || this.nominal == 0) {
            this._snackBar.open('Kolom isian harus terisi', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            try {
                await this.rest.update_transaction_out({
                    id: this.id,
                    idCategory: this.kategori,
                    desc: this.desc,
                    amt: this.nominal
                }).subscribe(async (data)=>{
                    this._snackBar.open('Berhasil diperbarui', 'Oke', {
                        duration: 2000,
                        panelClass: ['mat-snackbar', 'mat-primary']
                    });
                }); 
            } catch (error) {
                console.log(error);
            }
            this.dialogRef.close();
        }
    }

}
