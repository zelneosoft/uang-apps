import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-grafik',
    templateUrl: './grafik.component.html',
    styleUrls: ['./grafik.component.css']
})
export class GrafikComponent implements OnInit {

    loading = true;

    constructor(
        private _location: Location,
    ) { }

    async ngOnInit() {
        this.loading = false
    }

    filter(arr) {

    }

    back() {
        this._location.back();
    }

}
