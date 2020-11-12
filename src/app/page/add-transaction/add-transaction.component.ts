import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-add-transaction',
    templateUrl: './add-transaction.component.html',
    styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

    kategori;
    nominal;
    desc;

    constructor() { }

    ngOnInit(): void {
    }

    save() {

    }

    onNoClick() {

    }

}
