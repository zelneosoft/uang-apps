import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionComponent } from '../add-transaction/add-transaction.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit(): void {
    }

    openDialogAdd() {
        const dialogRef = this.dialog.open(AddTransactionComponent, {
            width: '400px',
            data: {},
        });
        dialogRef.afterClosed().subscribe(arr => {
            // this.loading = true;
            this.ngOnInit();
        });
    }

}
