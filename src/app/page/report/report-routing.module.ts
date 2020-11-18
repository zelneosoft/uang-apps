import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainReportComponent } from './main-report/main-report.component';
import { GrafikComponent } from './grafik/grafik.component';

const routes: Routes = [
    {
        path: '',
        component: MainReportComponent
    },
    {
        path: 'chart',
        component: GrafikComponent
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
