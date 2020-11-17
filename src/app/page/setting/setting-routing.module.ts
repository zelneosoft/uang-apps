import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSettingComponent } from './main-setting/main-setting.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { PinComponent } from './pin/pin.component';

const routes: Routes = [
    {
        path: '',
        component: MainSettingComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'pin',
        component: PinComponent
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
export class SettingRoutingModule { }
