import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';
import { DialogAddComponent } from '../dialog-add/dialog-add.component';
import { DialogConfirmDeleteAllComponent } from '../dialog-confirm-delete-all/dialog-confirm-delete-all.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-cash-out',
    templateUrl: './cash-out.component.html',
    styleUrls: ['./cash-out.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CashOutComponent implements OnInit {

    filterTitle;
    loading = true;
    dataTransaction:Object;
    p: number = 1;
    param = 2;
    
    constructor(
        public dialog: MatDialog,
        private rest: ApiService,
        private _location: Location,
        private _bottomSheet: MatBottomSheet,
        private _snackBar: MatSnackBar,
        ) 
    { }

    async ngOnInit() {
        await this.rest.get_trans_out(this.param).subscribe((data) => {
            if (data['success']){
                // console.log(data)
                if (this.param == 0){
                    this.filterTitle = 'Hari ini'
                }
                if (this.param == 1){
                    this.filterTitle = 'Minggu ini'
                }
                if (this.param == 2){
                    this.filterTitle = 'Bulan ini'
                }
                if (this.param == 3){
                    this.filterTitle = 'Semua'
                }
                this.loading = false;
                this.dataTransaction = data['data'];
            }
        });
    }

    openDialogAdd() {
        const dialogRef = this.dialog.open(DialogAddComponent, {
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(arr => {
            if (arr == true) {
                this.loading = true;
                this.ngOnInit();
            }
        });
    }

    openDialogEdit(arr) {
        const dialogRef = this.dialog.open(DialogEditComponent, {
            width: '400px',
            data: arr,
        });
        dialogRef.afterClosed().subscribe(arr => {
            if (arr == true) {
                this.loading = true;
                this.ngOnInit();
            }
        });
    }

    confirmDelete() {
        const dialogRef = this.dialog.open(DialogConfirmDeleteAllComponent, {
            width: '400px'
        });
        dialogRef.afterClosed().subscribe(arr => {
            if (arr == true) {
                this.loading = true;
                this.delete();
            }
        });
    }

    async delete() {
        await this.rest.delete_transaction_in_all().subscribe((data) => {
            if (data['success']){
                this.ngOnInit();
                this._snackBar.open('Berhasil reset transaksi', 'Oke', {
                    duration: 2000,
                    panelClass: ['mat-snackbar', 'mat-primary']
                });
            }
        });
    }

    openBottomSheet(): void {
        const btmSheet = this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
            data: this.param,
        });
        btmSheet.afterDismissed().subscribe((dataFromChild) => {
            // console.log(dataFromChild);
            if (dataFromChild !== undefined){
                this.param = dataFromChild;
                this.loading = true;
                this.ngOnInit();
            }
        });
    }

    back() {
        this._location.back();
    }

}

@Component({
    selector: 'bottom-sheet-overview-example-sheet',
    templateUrl: 'bottom-sheet.html',
})
export class BottomSheetOverviewExampleSheet {

    dataParam;

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    ) {
        this.dataParam = data;
        // console.log(this.dataParam)
    }

    closeBottomSheet(arr){
        this._bottomSheetRef.dismiss(arr);
    }
}
