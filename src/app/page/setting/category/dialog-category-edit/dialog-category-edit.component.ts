import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-category-edit',
    templateUrl: './dialog-category-edit.component.html',
    styleUrls: ['./dialog-category-edit.component.css']
})
export class DialogCategoryEditComponent implements OnInit {

    nama = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) public dataCategory: any,
        public dialogRef: MatDialogRef<DialogCategoryEditComponent>,
    ) { }

    ngOnInit(): void {
        this.nama = this.dataCategory.categoryDescription
    }

    delete(): void {
        this.dialogRef.close();
    }

}
