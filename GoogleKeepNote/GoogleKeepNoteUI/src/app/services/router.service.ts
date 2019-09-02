import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {
constructor(public router: Router) { }
 routeToDashboard() {
   console.log('Navigate to dashboard');
   this.router.navigate(['dashboard']);
   
 }

 routeToLogin() {
   this.router.navigate(['login']);
 }

 routeToEditNoteView(noteId)
   {
     this.router.navigate(['dashboard', {
       outlets: {
         noteEditOutlet: ['note', noteId, 'edit'],
       }
     }])
   }

   routeToRegister(){
    this.router.navigate(['register']);
   }
   routeToEditCategoryView(categoryid)
   {
     this.router.navigate(['display-category', {
       outlets: {
        catEditOutlet: ['category', categoryid, 'edit'],
       }
     }])
   }

   routeToEditReminderView(reminderId)
   {
     this.router.navigate(['display-reminder', {
       outlets: {
        remEditOutlet: ['reminder', reminderId, 'edit'],
       }
     }])
   }


   routeBack() {
     this.router.navigate(['dashboard']);
   }

   routeToNoteView() {
     this.router.navigate(['dashboard/view/noteview']);
   }

   routeToCategoryDisplay() {
     this.router.navigate(['display-category']);
   }
   routeToReminder() {
    this.router.navigate(['reminder']);
  }

   routeToListView() {
     this.router.navigate(['dashboard/view/listview']);
   }
 }