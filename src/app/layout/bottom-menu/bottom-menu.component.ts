import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddTransactionComponent } from 'src/app/page/add-transaction/add-transaction.component';

@Component({
    selector: 'app-bottom-menu',
    templateUrl: './bottom-menu.component.html',
    styleUrls: ['./bottom-menu.component.css']
})
export class BottomMenuComponent implements OnInit {

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
