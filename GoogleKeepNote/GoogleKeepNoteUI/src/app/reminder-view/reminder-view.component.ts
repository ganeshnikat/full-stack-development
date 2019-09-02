import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-reminder-view',
  templateUrl: './reminder-view.component.html',
  styleUrls: ['./reminder-view.component.css']
})
export class ReminderViewComponent implements OnInit {

  reminder: Array<Reminder>;
  constructor(private reminderservice: ReminderService) { }

  ngOnInit() {
    this.reminderservice.getReminders().subscribe(
      res => {
          this.reminder = res;
      },
      err =>{
      })
    }
}
