import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

    constructor(public dialog: MatDialog) { }

    openDialog(data): void {
        this.dialog.open(ErrorComponent, {
            data: data,
            width: '450px'
        });
    }
}
