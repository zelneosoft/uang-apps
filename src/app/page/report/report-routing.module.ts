import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainReportComponent } from './main-report/main-report.component';

const routes: Routes = [
    {
        path: '',
        component: MainReportComponent
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
export class ReportRoutingModule { }
