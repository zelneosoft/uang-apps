import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-main-report',
    templateUrl: './main-report.component.html',
    styleUrls: ['./main-report.component.css']
})
export class MainReportComponent implements OnInit {

    loading = true;
    totalIn;
    totalOut;
    param = 2;
    title;
    categoryIn:Object;
    categoryOut:Object;
    
    type = 'PieChart';
    data = [
        ['Pemasukan', 3000000],
        ['Pengeluaran', 1500000]
    ];
    option =  {
        is3D: true,
        'backgroundColor': 'transparent',
        fontName: 'Quicksand'
    };

    constructor(
        private _location: Location,
        private rest: ApiService,
    ) { }

    async ngOnInit() {
        if (this.param == 0){
            this.title = 'Hari ini'
        }
        if (this.param == 1){
            this.title = 'Minggu ini'
        }
        if (this.param == 2){
            this.title = 'Bulan ini'
        }
        if (this.param == 3){
            this.title = 'Tahun ini'
        }
        await this.rest.get_data_report(this.param).subscribe((data) => {
            if (data['success']){
                this.loading = false;
                // console.log(data);
                this.totalIn = data['data'][0][0]['totalIn'];
                this.totalOut = data['data'][1][0]['totalOut'];
                this.categoryIn = data['data'][2];
                this.categoryOut = data['data'][3];
            }
        });
    }

    filter(arr) {
        this.loading = true;
        this.param = arr;
        this.ngOnInit();
    }

    back() {
        this._location.back();
    }

}
