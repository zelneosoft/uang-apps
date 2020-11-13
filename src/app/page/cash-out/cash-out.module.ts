import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashOutComponent } from './cash-out/cash-out.component';
import { CashOutRoutingModule } from './cash-out-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';

@NgModule({
    declarations: [CashOutComponent, DialogEditComponent],
    imports: [
        CommonModule,
        CashOutRoutingModule,
        MaterialModule
    ]
})
export class CashOutModule { }
