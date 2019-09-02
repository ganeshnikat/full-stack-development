import { category } from "./category";
import { Reminder } from "./reminder";

export class Note {
  noteId: Number;
  noteTitle: string;
  noteContent: string;
  noteStatus: string;
  noteCreatedBy : string;
  category : category;
  reminder : Reminder;
  
  constructor() {
    this.noteTitle = '';
    this.noteContent = '';
    this.noteStatus = 'not-started';
    this.noteCreatedBy = '';
    this.category = null;
    this.reminder = null;
  }
}