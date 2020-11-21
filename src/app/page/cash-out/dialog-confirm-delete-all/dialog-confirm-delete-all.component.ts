import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-confirm-delete-all',
    templateUrl: './dialog-confirm-delete-all.component.html',
    styleUrls: ['./dialog-confirm-delete-all.component.css']
})
export class DialogConfirmDeleteAllComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogConfirmDeleteAllComponent>,
    ) { }

    ngOnInit(): void {
    }

    delete() {
        this.dialogRef.close(true);
    }

}
