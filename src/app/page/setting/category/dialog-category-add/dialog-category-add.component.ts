import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-category-add',
    templateUrl: './dialog-category-add.component.html',
    styleUrls: ['./dialog-category-add.component.css']
})
export class DialogCategoryAddComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogCategoryAddComponent>
    ) { }

    ngOnInit(): void {
    }

    save() {
        
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
