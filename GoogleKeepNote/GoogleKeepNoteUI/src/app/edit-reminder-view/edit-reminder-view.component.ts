import { Component, OnInit, Inject } from '@angular/core';
import { Reminder } from '../reminder';
import { ReminderService } from '../services/reminder.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-reminder-view',
  templateUrl: './edit-reminder-view.component.html',
  styleUrls: ['./edit-reminder-view.component.css']
})
export class EditReminderViewComponent implements OnInit {

  rem: Reminder;
  errMessage: string;

  onSave() {
    this.reminderService.editReminder(this.rem).subscribe((editedNote) => {
      this.matDialogRef.close();
      //console.log("editedNote ",editedNote);
    },
    err => {
      this.matDialogRef.close();
      if (err.status === 404) {
        this.errMessage = err.error.text;
      }
      else {
        this.errMessage = err.error.text;
      }
    })
  }

  onDelete() {
    this.reminderService.deleteReminder(this.rem).subscribe((editedcategory) => {
      this.matDialogRef.close();
    },
    err => {
      this.matDialogRef.close();
      if (err.status === 404) {
        this.errMessage = err.error.text;
      }
      else {
        this.errMessage = err.error.text;
      }
    })
  }


  constructor(private matDialogRef: MatDialogRef<EditReminderViewComponent>,
    private routerService: RouterService,
    private reminderService: ReminderService,
    @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit() {
    console.log('Inside ngOnit of reminder view component file ', this.data.remid);

    this.reminderService.getReminderById(this.data.remid).subscribe(reminders => {
      console.log(reminders);
      this.rem = reminders;
      console.log(this.rem);
    }
  );
  }

  ngOnDestroy() {
    this.routerService.routeToReminder();
  }
}

