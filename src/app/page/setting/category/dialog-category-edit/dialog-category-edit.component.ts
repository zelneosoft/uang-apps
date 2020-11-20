import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-dialog-category-edit',
    templateUrl: './dialog-category-edit.component.html',
    styleUrls: ['./dialog-category-edit.component.css']
})
export class DialogCategoryEditComponent implements OnInit {

    id = '';
    nama = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataCategory: any,
        public dialogRef: MatDialogRef<DialogCategoryEditComponent>,
        private _snackBar: MatSnackBar,
        private rest: ApiService,
    ) { }

    ngOnInit(): void {
        this.id = this.dataCategory.categoryID;
        this.nama = this.dataCategory.categoryDescription;
    }

    async delete() {
        try {
            await this.rest.delete_category({
                id: this.id
            }).subscribe(async (data)=>{
                if (data['success']) {
                    this._snackBar.open('Kategori berhasil dihapus', 'Oke', {
                        duration: 4000,
                        panelClass: ['mat-snackbar', 'mat-primary']
                    });
                }
            }); 
        } catch (error) {
            console.log(error);
        }
        this.dialogRef.close();
    }

    async edit(){
        if (this.nama == "") {
            this._snackBar.open('Kolom isian harus terisi', 'Oke', {
                duration: 4000,
                panelClass: ['mat-snackbar', 'mat-primary']
            });
        } else {
            try {
                await this.rest.update_category({
                    id: this.id,
                    desc: this.nama
                }).subscribe(async (data)=>{
                    if (data['success']) {
                        this._snackBar.open('Kategori berhasil diperbarui', 'Oke', {
                            duration: 4000,
                            panelClass: ['mat-snackbar', 'mat-primary']
                        });
                    }
                }); 
            } catch (error) {
                console.log(error);
            }
            this.dialogRef.close(true);
        }
    }

}
