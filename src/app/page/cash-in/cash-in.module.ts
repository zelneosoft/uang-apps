import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashInComponent } from './cash-in/cash-in.component';
import { CashInRoutingModule } from './cash-in-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
    declarations: [CashInComponent],
    imports: [
        CommonModule,
        CashInRoutingModule,
        MaterialModule
    ]
})
export class CashInModule { }
