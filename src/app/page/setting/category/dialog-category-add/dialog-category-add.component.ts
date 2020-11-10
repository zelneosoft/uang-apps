import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-dialog-category-add',
    templateUrl: './dialog-category-add.component.html',
    styleUrls: ['./dialog-category-add.component.css']
})
export class DialogCategoryAddComponent implements OnInit {

    kategori = '';
    nama = '';

    constructor(
        public dialogRef: MatDialogRef<DialogCategoryAddComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,
    ) { }

    ngOnInit(): void {
    }

    async save() {
        if (this.kategori == "" || this.nama == "") {
            this._snackBar.open('Kolom isian harus terisi', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            try {
                await this.rest.save_category({
                    type: this.kategori,
                    desc: this.nama
                }).subscribe(async (data)=>{}); 
            } catch (error) {
                console.log(error);
            }
            this.dialogRef.close();
        }
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
