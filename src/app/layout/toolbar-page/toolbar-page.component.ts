import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-toolbar-page',
    templateUrl: './toolbar-page.component.html',
    styleUrls: ['./toolbar-page.component.css']
})
export class ToolbarPageComponent implements OnInit {

    title = '';

    constructor(
        private route: ActivatedRoute,
        private _location: Location
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(v => this.title = v['title1']);        
    }

    back() {
        this._location.back();
    }

}
