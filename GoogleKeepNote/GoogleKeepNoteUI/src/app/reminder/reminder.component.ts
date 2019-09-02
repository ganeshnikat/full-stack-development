import { Component, OnInit, Input } from '@angular/core';
import { Reminder } from '../reminder';
import { ReminderService } from '../services/reminder.service';
import { RouterService } from '../services/router.service';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  @Input()
  // reminder: Reminder;
  reminder:any;
  constructor(public reminderService: ReminderService, public routerService: RouterService) { }

  ngOnInit() {
    this.reminderService.fetchRemindersFromServer().subscribe(categories => {
      this.reminder = categories;
      console.log(this.reminder);
     
     
    }
  );
  }
   openEditView(reminder) {
     
     this.routerService.routeToEditReminderView(reminder.reminderId);
  }
}
