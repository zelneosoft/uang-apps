import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainSettingComponent } from './main-setting/main-setting.component';
import { MaterialModule } from 'src/app/material.module';
import { SettingRoutingModule } from './setting-routing.module';



@NgModule({
    declarations: [MainSettingComponent],
    imports: [
        CommonModule,
        SettingRoutingModule,
        MaterialModule
    ]
})
export class SettingModule { }
