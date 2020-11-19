import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from 'src/app/service/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-main-report',
    templateUrl: './main-report.component.html',
    styleUrls: ['./main-report.component.css']
})
export class MainReportComponent implements OnInit {

    loading = true;
    noData = true;
    totalIn;
    totalOut;
    param = 2;
    title;
    categoryIn:Object;
    categoryOut:Object;

    constructor(
        private _location: Location,
        private rest: ApiService,
        private _snackBar: MatSnackBar,
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
                // console.log(data['data']);
                this.totalIn = data['data'][0][0]['totalIn'];
                this.totalOut = data['data'][1][0]['totalOut'];
                this.categoryIn = data['data'][2];
                this.categoryOut = data['data'][3];
                if (this.totalIn == 0 && this.totalOut == 0) {
                    this.noData = false;
                }
            }
        });
    }

    filter(arr) {
        this.loading = true;
        this.param = arr;
        this.ngOnInit();
    }

    download() {
        this._snackBar.open('Fitur belum tersedia', 'Oke', {
            duration: 2000,
            panelClass: ['mat-snackbar', 'mat-primary']
        });
    }

    back() {
        this._location.back();
    }

}
