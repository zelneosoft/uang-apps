import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

const ExportMatModule = [   
    MatButtonModule,
    MatRippleModule,
    MatDialogModule,
    MatIconModule
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ExportMatModule
    ],
    exports: [
        ExportMatModule
    ]
})
export class MaterialModule { }
