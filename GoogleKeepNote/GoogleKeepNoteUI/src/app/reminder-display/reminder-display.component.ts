import { Component, OnInit } from '@angular/core';
import { ReminderService } from '../services/reminder.service';

@Component({
  selector: 'app-reminder-display',
  templateUrl: './reminder-display.component.html',
  styleUrls: ['./reminder-display.component.css']
})
export class ReminderDisplayComponent implements OnInit {

  constructor(private reminderService: ReminderService) { }

  ngOnInit() {
    console.log('Hello');
    this.reminderService.fetchRemindersFromServer();
  }

}
