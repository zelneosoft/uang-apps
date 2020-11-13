import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-cash-in',
    templateUrl: './cash-in.component.html',
    styleUrls: ['./cash-in.component.css']
})
export class CashInComponent implements OnInit {

    loading = true;

    constructor(
        public dialog: MatDialog,
        private rest: ApiService,
    ) { }

    async ngOnInit() {
        await this.rest.get_trans_in().subscribe((data) => {
            if (data['success']){
                if (data['data'][0].length == 0){
                    this.loading = false;
                } else {
                    this.loading = false;
                    // this.totalSaldo = data['data'][0][0]['totalSaldo'];
                    // this.transactionIn = data['data'][1];
                    // this.transactionOut = data['data'][2];
                }
            }
        });
    }

}
