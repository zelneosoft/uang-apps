import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-main-report',
    templateUrl: './main-report.component.html',
    styleUrls: ['./main-report.component.css']
})
export class MainReportComponent implements OnInit {

    loading = true;

    constructor(
        private _location: Location,
    ) { }

    ngOnInit(): void {
        this.loading = false;
    }

    back() {
        this._location.back();
    }

}
