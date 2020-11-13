import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CashInComponent } from './cash-in/cash-in.component';

const routes: Routes = [
    {
        path: '',
        component: CashInComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class CashInRoutingModule { }
