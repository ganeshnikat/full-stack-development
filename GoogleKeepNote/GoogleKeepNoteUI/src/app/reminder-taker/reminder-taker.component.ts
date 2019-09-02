import { Component, OnInit } from '@angular/core';
import { Reminder } from '../reminder';
import { ReminderService } from '../services/reminder.service';
import { DialogService } from '../dialog/dialog.service';
@Component({
  selector: 'app-reminder-taker',
  templateUrl: './reminder-taker.component.html',
  styleUrls: ['./reminder-taker.component.css']
})
export class ReminderTakerComponent implements OnInit {

  public rem: Reminder;
  errMessage: string;
  constructor(private reminderService: ReminderService,private dialogService: DialogService) {
    this.rem = new Reminder();
  }
  ngOnInit() {

  }
  addReminder() {
    if (this.rem.reminderId !== '' && this.rem.reminderName !== ''
      && this.rem.reminderDescription !== '' ) {
      this.reminderService.addReminder(this.rem).subscribe(
        data => { console.log('inside data of addcatgeory ', data)
        this.dialogService.openDialog("Success","Reminder Added Successfully!")
       },
        err => {
          console.log('err object in addCategory ', err);
          this.dialogService.openDialog("Error",err.error)
        }
      )
      this.rem = new Reminder();
      this.errMessage="";
    } else {
      this.errMessage = "All fields are required.. Please fill all required fields and continue";
    }
  }
}
