import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-dialog-add',
    templateUrl: './dialog-add.component.html',
    styleUrls: ['./dialog-add.component.css']
})
export class DialogAddComponent implements OnInit {

    loading = true;
    tipe;
    kategori;
    nominal;
    desc;
    result;
    dataCategory: any;

    constructor(
        public dialogRef: MatDialogRef<DialogAddComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,
    ) { }

    async ngOnInit() {
        this.result = 0;
        try {
            await this.rest.get_category().subscribe((data) => {
                this.loading = false;
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

    async save() {
        if (this.kategori == "" || this.desc == "" || this.nominal == "" || this.nominal == null || this.nominal == 0) {
            this._snackBar.open('Kolom isian harus terisi semua', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            try {
                await this.rest.save_transaction_out({
                    idCategory: this.kategori,
                    desc: this.desc,
                    amt: this.nominal
                }).subscribe(async (data)=>{
                    if (data['success']) {
                        this._snackBar.open('Berhasil.', 'Oke', {
                            duration: 4000,
                            panelClass: ['mat-snackbar', 'mat-primary']
                        });
                        this.dialogRef.close(true);
                    } else {
                        this._snackBar.open('Gagal, terdapat kesalahan', 'Oke', {
                            duration: 4000,
                            panelClass: ['mat-snackbar', 'mat-primary']
                        });
                        this.dialogRef.close();
                    }
                }); 
            } catch (error) {
                console.log(error);
            }
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
