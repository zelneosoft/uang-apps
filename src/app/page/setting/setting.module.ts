import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSettingComponent } from './main-setting/main-setting.component';
import { MaterialModule } from 'src/app/material.module';
import { SettingRoutingModule } from './setting-routing.module';
import { CategoryComponent } from './category/category.component';
import { DialogCategoryAddComponent } from './category/dialog-category-add/dialog-category-add.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [MainSettingComponent, CategoryComponent, DialogCategoryAddComponent],
    imports: [
        CommonModule,
        SettingRoutingModule,
        MaterialModule,
        FormsModule
    ]
})
export class SettingModule { }
