import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Reminder } from '../reminder';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ReminderService {

  reminder: Array<Reminder>;
  remindersSubject: BehaviorSubject<Array<Reminder>>;

  constructor(private authservice: AuthenticationService, private httpClient: HttpClient) {
    this.reminder = [];
    this.remindersSubject = new BehaviorSubject([]);

  }

  fetchRemindersFromServer() {
    console.log('inside fectchRemindersFromServer');
    return this.httpClient.get<Reminder[]>('http://localhost:8090/api/v1/reminder/');
    // .subscribe(categories => {
    //   console.log(categories)
    //   this.reminder = categories;
    //   this.remindersSubject.next(this.reminder);
    // },
      // (err: any) => {
      //   this.remindersSubject.error(err);
      // })
  }


  getReminders(): BehaviorSubject<Array<Reminder>> {
    console.log(this.remindersSubject);
    return this.remindersSubject;
  }

  addReminder(rem: Reminder): Observable<Reminder> {
    const authHeader = new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.getItem('bearerToken'),
      'Content-Type': 'application/json; charset=utf-8'
    });
    console.log('rem:', rem);
    console.log('local stordage userid ' + localStorage.getItem('userId'));
    rem.reminderCreatedBy = localStorage.getItem('userId');
    return this.httpClient.post<Reminder>('http://localhost:8090/api/v1/reminder', rem, {
      headers: authHeader
    }).pipe(tap(addedReminder => {
      console.log('addedNote ', addedReminder);
      this.reminder.push(rem);
      this.remindersSubject.next(this.reminder);
    }))
  }

  editReminder(rem: Reminder): Observable<Reminder> {
    return this.httpClient.put<Reminder>(`http://localhost:8090/api/v1/reminder/${rem.reminderId}`, rem, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authservice.getBearerToken()}`)
    }).pipe(tap(editedReminder => {
      console.log('editedNote ', editedReminder);
      const cat = this.reminder.find(note => cat.categoryId === editedReminder.reminderId);
      Object.assign(rem, editedReminder);
      this.remindersSubject.next(this.reminder);
    }))
  }


  deleteReminder(rem: Reminder): Observable<Reminder> {
    return this.httpClient.delete<Reminder>(`http://localhost:8090/api/v1/reminder/${rem.reminderId}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${this.authservice.getBearerToken()}`)
    }).pipe(tap(deletedReminder => {
      console.log('inside pipe of delet category ', this.reminder);
      console.log('inside pipe of delet category ', deletedReminder);
      console.log('inside pipe of delet category ', rem);
      this.reminder.splice(this.reminder.indexOf(rem), 1);
      this.remindersSubject.next(this.reminder);
    }))
  }

  getReminderById(reminderId) {
   // const foundnote = this.reminder.find(rem => rem.reminderId === reminderId);
   console.log('I am in getReminderById');
   const rem = this.httpClient.get<Reminder>(`http://localhost:8090/api/v1/reminder/${reminderId}`);
   console.log(rem);
   return rem;

}

}
