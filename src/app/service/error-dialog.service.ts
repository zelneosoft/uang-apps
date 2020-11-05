import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorComponent } from '../error/error.component';

@Injectable({
  providedIn: 'root'
})
export class ErrorDialogService {

    admin: boolean;

    constructor(public dialog: MatDialog) { }

    openDialog(data): void {
        if (this.admin = true){
            const dialogRef = this.dialog.open(ErrorComponent, {
                data: data,
                width: '450px'
            });
        }
    }
}
