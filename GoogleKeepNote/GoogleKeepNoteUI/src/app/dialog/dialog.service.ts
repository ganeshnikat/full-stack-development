import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog.component';

@Injectable()
export class DialogService {

  constructor(public dialog: MatDialog) { }


  public openDialog(title: string, msg: string) {
    this.dialog.open(DialogComponent, {
      width: '300px',
      disableClose: true,
      data: {
        title: title,
        msg: msg
      }
    });
  }

}
