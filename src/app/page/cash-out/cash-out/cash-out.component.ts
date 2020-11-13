import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-cash-out',
    templateUrl: './cash-out.component.html',
    styleUrls: ['./cash-out.component.css']
})
export class CashOutComponent implements OnInit {

    loading = true;
    dataTransaction:Object;
    
    constructor(
        public dialog: MatDialog,
        private rest: ApiService,
        private _location: Location,
        private _bottomSheet: MatBottomSheet
        ) 
    { }

        async ngOnInit() {
            await this.rest.get_trans_in().subscribe((data) => {
                if (data['success']){
                    console.log(data)
                    this.loading = false;
                    this.dataTransaction = data['data']
                    // if (data['data'][0].length == 0){
                    //     this.loading = false;
                    // } else {
                    //     this.loading = false;
                    //     this.dataTransaction = data
                        // this.totalSaldo = data['data'][0][0]['totalSaldo'];
                        // this.transactionIn = data['data'][1];
                        // this.transactionOut = data['data'][2];
                    // }
                }
            });
        }

    openBottomSheet(): void {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
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
    constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

    openLink(event: MouseEvent): void {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
