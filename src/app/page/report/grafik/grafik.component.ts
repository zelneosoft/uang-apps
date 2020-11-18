import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';

@Component({
    selector: 'app-grafik',
    templateUrl: './grafik.component.html',
    styleUrls: ['./grafik.component.css']
})
export class GrafikComponent implements OnInit {

    loading = true;
    param = 2;
    title;
    totalIn;
    totalOut;
    rinciIn;
    rinciOut;
    type;
    data;
    option = {
        colors: ['#2492F4', '#f44336'],
        is3D: true,
        'backgroundColor': 'transparent',
        fontName: 'Quicksand',
        fontSize: 14,
        'width': '100%',
        legend: 'none'
    };

    // optionBarIn = {
    //     colors: ['#2492F4'],
    //     forceIFrame: true,
    //     'backgroundColor': 'transparent',
    //     fontName: 'Quicksand',
    //     fontSize: 14,
    //     'width': '100%',
    //     legend: 'none'
    // };

    // optionBarOut = {
    //     colors: ['#f44336'],
    //     forceIFrame: true,
    //     'backgroundColor': 'transparent',
    //     fontName: 'Quicksand',
    //     fontSize: 12,
    //     'width': 500,
    //     legend: 'none'
    // };

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
                console.log(data['data']);
                this.totalIn = data['data'][0][0]['totalIn'];
                this.totalOut = data['data'][1][0]['totalOut'];
                this.rinciIn = data['data'][4];
                this.rinciOut = data['data'][5];
                this.type = 'PieChart';
                this.data = [
                    ['Pemasukan', data['data'][0][0]['totalIn']],
                    ['Pengeluaran', data['data'][1][0]['totalOut']]
                ];
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
