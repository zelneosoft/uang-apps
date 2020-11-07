import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-toolbar-page',
    templateUrl: './toolbar-page.component.html',
    styleUrls: ['./toolbar-page.component.css']
})
export class ToolbarPageComponent implements OnInit {

    title = '';

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(v => this.title = v['title']);        
    }

}
