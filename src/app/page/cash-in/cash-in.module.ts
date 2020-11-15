import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashInComponent, BottomSheetOverviewExampleSheet } from './cash-in/cash-in.component';
import { CashInRoutingModule } from './cash-in-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
    declarations: [CashInComponent, DialogEditComponent, BottomSheetOverviewExampleSheet],
    imports: [
        CommonModule,
        CashInRoutingModule,
        MaterialModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class CashInModule { }
