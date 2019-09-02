import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../note';
import { category } from '../category';
import { Reminder } from "../reminder";
import {CategoriesService} from '../services/categories.service';
import {ReminderService} from '../services/reminder.service';
import { DialogService } from '../dialog/dialog.service';
@Component({
  selector: 'app-note-taker',
  templateUrl: './note-taker.component.html',
  styleUrls: ['./note-taker.component.css']
})
export class NoteTakerComponent {

  public note: Note;
  categories: Array<category>;
  errMessage: string;
  public category : category;
  reminders: Array<Reminder>;
  
  constructor(private noteService: NotesService,private categoryService:CategoriesService,private reminderService:ReminderService,private dialogSerive:DialogService) {
    this.note = new Note();
   this.categoryService.fetchCategoriesFromServer();
   this.reminderService.fetchRemindersFromServer();
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(
      res => {
        this.categories = res;
        console.log( 'Categories', this.categories);
      },err => {

      }
    );
    this.reminderService.getReminders().subscribe(
      res => {
        this.reminders = res;
        console.log( 'Reminders', this.reminders);
      },err => {

      }
    )
  }
  addNote() {
    if (this.note.noteContent !== '' && this.note.noteTitle !== '' && 
     this.note.noteStatus !== '' && this.note.category != null) {
      this.noteService.addNote(this.note).subscribe(
        data => { 
          this.dialogSerive.openDialog("Success","Note Added Successfully!");
        },
        err => {
          this.dialogSerive.openDialog("Error",err.error);
        }
      )
      this.note = new Note();
      this.errMessage ="";
    }
    else {
      this.errMessage = "All fields are required.. Please fill all required fields and continue";
    }
  }

  
}