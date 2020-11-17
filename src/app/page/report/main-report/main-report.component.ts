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
    categoryIn:Object;
    categoryOut:Object;

    constructor(
        private _location: Location,
        private rest: ApiService,
    ) { }

    async ngOnInit() {
        await this.rest.get_data_report(this.param).subscribe((data) => {
            if (data['success']){
                this.loading = false;
                console.log(data);
                this.totalIn = data['data'][0][0]['totalIn'];
                this.totalOut = data['data'][1][0]['totalOut'];
                this.categoryIn = data['data'][2];
                this.categoryOut = data['data'][3];
            }
        });
    }

    filter(arr) {
        this.param = arr;
        this.ngOnInit();
    }

    back() {
        this._location.back();
    }

}
