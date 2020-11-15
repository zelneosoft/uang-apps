import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';

@Component({
    selector: 'app-cash-out',
    templateUrl: './cash-out.component.html',
    styleUrls: ['./cash-out.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class CashOutComponent implements OnInit {

    loading = true;
    dataTransaction:Object;
    p: number = 1;
    param = 0;
    
    constructor(
        public dialog: MatDialog,
        private rest: ApiService,
        private _location: Location,
        private _bottomSheet: MatBottomSheet
        ) 
    { }

    async ngOnInit() {
        await this.rest.get_trans_out(this.param).subscribe((data) => {
            if (data['success']){
                console.log(data)
                this.loading = false;
                this.dataTransaction = data['data']
            }
        });
    }

    openDialogEdit(arr) {
        const dialogRef = this.dialog.open(DialogEditComponent, {
            width: '400px',
            data: arr,
        });
        dialogRef.afterClosed().subscribe(arr => {
            this.loading = true;
            this.ngOnInit();
        });
    }

    openBottomSheet(): void {
        const btmSheet = this._bottomSheet.open(BottomSheetOverviewExampleSheet, {
            data: { names: ['Frodo', 'Bilbo'] },
        });
        btmSheet.afterDismissed().subscribe((dataFromChild) => {
            console.log(dataFromChild);
            this.param = dataFromChild;
            this.loading = true;
            this.ngOnInit();
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

    dataQ;

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    ) {
        // console.log(data)
        this.dataQ = data;
    }

    closeBottomSheet(arr){
        this._bottomSheetRef.dismiss(arr);
    }

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss(this.data);
        event.preventDefault();
    }
}
