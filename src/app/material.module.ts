import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

const ExportMatModule = [   
    MatButtonModule,
    MatRippleModule
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
