import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashOutComponent } from './cash-out/cash-out.component';
import { CashOutRoutingModule } from './cash-out-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CashOutComponent, DialogEditComponent],
    imports: [
        CommonModule,
        CashOutRoutingModule,
        MaterialModule,
        FormsModule
    ]
})
export class CashOutModule { }
