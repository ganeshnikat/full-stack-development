import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { MAT_DATEPICKER_VALIDATORS } from '@angular/material';
import { RouterService } from '../services/router.service';
import { DialogService } from '../dialog/dialog.service';

//import { AlertService, UserService, AuthenticationService } from '@/_services';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
  })
export class RegisterComponent implements OnInit {
    loginForm: FormGroup;
    errorMessage : string;
  firstName = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
   lastName = new FormControl('', Validators.compose([Validators.required, Validators.minLength(1)]));
   userRole = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])); 
   password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
   confirmpassword = new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]));
   userId = new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]));
    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
        private routerService: RouterService,
        public dialogService: DialogService
      ) { 
        // redirect to home if already logged in
     
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            userRole: ['', Validators.required], 
            password: ['', [Validators.required, Validators.minLength(3)]], 
            confirmpassword: ['', [Validators.required, Validators.minLength(3)]],
            userId : ['',[Validators.required]]
        });
      
    }

    // convenience getter for easy access to form fields
    //get f() { return this.registerForm.controls; }
    onLogin(){
        this.routerService.routeToLogin();
    }
    ifNotPassWordMatches() {
    if(this.password.value ==='' || this.password.value == null){
    return (this.password.value === this.confirmpassword.value);
    }else{
    return !(this.password.value === this.confirmpassword.value);
    }
    }
    onSubmit() {
        this.authService.register({
         firstName: this.firstName.value,
          lastName : this.lastName.value,
          userRole : this.userRole.value,
          userPassword : this.password.value,
          userId : this.userId.value
        })
            .subscribe(
                res => {
                  console.log("Response from spring ");
                  this.router.navigateByUrl('/login');
                },
                err => {
                  console.log("Response from spring errror"+ JSON.stringify(err) ) ;
                  this.dialogService.openDialog("Error",err.error);
                });
    }
}
