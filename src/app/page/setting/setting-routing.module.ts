import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSettingComponent } from './main-setting/main-setting.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
    {
        path: '',
        component: MainSettingComponent
    },
    {
        path: 'category',
        component: CategoryComponent
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
