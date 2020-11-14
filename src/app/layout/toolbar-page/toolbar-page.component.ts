import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-toolbar-page',
    templateUrl: './toolbar-page.component.html',
    styleUrls: ['./toolbar-page.component.css']
})
export class ToolbarPageComponent implements OnInit {

    title = '';
    link = '';

    constructor(
        private route: ActivatedRoute,
        private _location: Location
    ) { 
        this.link = Router['url'];
    }

    ngOnInit(): void {
        this.route.data.subscribe(v => this.title = v['title']);
    }

    back() {
        this._location.back();
    }

    logout() {
        localStorage.clear();
        window.location.replace('/login');
    }

}
