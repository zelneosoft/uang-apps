import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomSheetOverviewExampleSheet, CashOutComponent } from './cash-out/cash-out.component';
import { CashOutRoutingModule } from './cash-out-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { DialogEditComponent } from './dialog-edit/dialog-edit.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogAddComponent } from './dialog-add/dialog-add.component';
import { DialogConfirmDeleteAllComponent } from './dialog-confirm-delete-all/dialog-confirm-delete-all.component';

@NgModule({
    declarations: [CashOutComponent, DialogEditComponent, BottomSheetOverviewExampleSheet, DialogAddComponent, DialogConfirmDeleteAllComponent],
    imports: [
        CommonModule,
        CashOutRoutingModule,
        MaterialModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class CashOutModule { }
