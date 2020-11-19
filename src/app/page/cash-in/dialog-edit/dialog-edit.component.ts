import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-dialog-edit',
    templateUrl: './dialog-edit.component.html',
    styleUrls: ['./dialog-edit.component.css'],
    providers: [DatePipe]
})
export class DialogEditComponent implements OnInit {

    loading = true;
    id;
    kategori = '';
    desc = '';
    nominal;
    result;
    dataCategory: any;
    date;

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataTransaction: any,
        public dialogRef: MatDialogRef<DialogEditComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,
        public datepipe: DatePipe
    ) { }

    async ngOnInit() {
        this.id = this.dataTransaction.inID;
        this.kategori = this.dataTransaction.categoryID;
        this.desc = this.dataTransaction.inDescription;
        this.nominal = this.dataTransaction.inAmt;
        this.result = this.dataTransaction.inAmt;
        this.date = this.datepipe.transform(this.dataTransaction.inCreateAt, 'yyyy-MM-dd');
        try {
            await this.rest.get_category().subscribe((data) => {
                this.loading = false;
                this.dataCategory = data['in'];
            })
        } catch (error) {
            console.log(error);
        }
        this.separatorProcess();
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
            await this.rest.delete_transaction_in({
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
        this.dialogRef.close(true);
    }

    async edit() {
        let dateEdit = this.datepipe.transform(this.date, 'yyyy-MM-dd h:mm:ss', 'GMT+1');
        if (this.kategori == "" || this.desc == "" || this.nominal == "" || this.nominal == 0) {
            this._snackBar.open('Kolom isian harus terisi', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            try {
                await this.rest.update_transaction_in({
                    id: this.id,
                    idCategory: this.kategori,
                    desc: this.desc,
                    amt: this.nominal,
                    date: dateEdit,
                }).subscribe(async (data)=>{
                    this._snackBar.open('Berhasil diperbarui', 'Oke', {
                        duration: 2000,
                        panelClass: ['mat-snackbar', 'mat-primary']
                    });
                }); 
            } catch (error) {
                console.log(error);
            }
            this.dialogRef.close(true);
        }
    }

}
