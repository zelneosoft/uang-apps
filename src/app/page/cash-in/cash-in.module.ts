import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashInComponent } from './cash-in/cash-in.component';
import { CashInRoutingModule } from './cash-in-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CashInComponent, DialogEditComponent],
    imports: [
        CommonModule,
        CashInRoutingModule,
        MaterialModule,
        FormsModule
    ]
})
export class CashInModule { }
