import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CashOutComponent } from './cash-out/cash-out.component';

const routes: Routes = [
    {
        path: '',
        component: CashOutComponent
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
export class CashOutRoutingModule { }
