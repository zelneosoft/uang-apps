import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashInComponent, BottomSheetOverviewExampleSheet } from './cash-in/cash-in.component';
import { CashInRoutingModule } from './cash-in-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { DialogConfirmDeleteAllComponent } from './dialog-confirm-delete-all/dialog-confirm-delete-all.component';

@NgModule({
    declarations: [CashInComponent, DialogEditComponent, BottomSheetOverviewExampleSheet, DialogAddComponent, DialogConfirmDeleteAllComponent],
    imports: [
        CommonModule,
        CashInRoutingModule,
        MaterialModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class CashInModule { }
