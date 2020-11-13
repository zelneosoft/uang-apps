import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashOutComponent } from './cash-out/cash-out.component';
import { CashOutRoutingModule } from './cash-out-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [CashOutComponent],
    imports: [
        CommonModule,
        CashOutRoutingModule,
        MaterialModule
    ]
})
export class CashOutModule { }
