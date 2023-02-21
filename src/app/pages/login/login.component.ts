import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

import { AuthService } from 'src/app/services/api/auth.service';
import { AbstractControl, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from 'src/app/services/storage.service';

import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
   
    email: new FormControl(''),
    password: new FormControl(''),
   
  });
  username = "";
  password = "";
  submitted:boolean = false;
  visible: boolean = true;
  changetype: boolean = true;
  
  
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor( private router: Router, private formBuilder: FormBuilder, private storage: StorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
      
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
              Validators.minLength(6),
            Validators.maxLength(40),
            //Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/)
          ]
        ],
      }
    );
    
  
  }

  reset() {
    this.submitted = false;
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  onSubmit() {
    this.submitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // this.username = this.loginForm.controls['email'].value;
    // this.password = this.loginForm.controls['password'].value;
    // let res = this.auth.login(this.username, this.password)
    
    // if (res === 200) {
    //   this.storage.accessToken = this.username;

    //   this.router.navigateByUrl('dashboard');
    // } else {
     
    // }th
    this.authService.login("wong@strongbytestudio.com", "qwer1234", "MY").pipe(
      finalize(() => {
        //    this.isLoading = false
     
      }))
      .subscribe(
        data => {
          this.router.navigateByUrl('dashboard');
        },
        err => {
          console.log('LOGIN ERROR: ', err);
         
          // if (err.message != null) {
          //   this.openInfoDialog('Login Info', err.message);
          // } else {
          //   this.openInfoDialog('Login Info', 'Please contact Customer Service for further assistance');
          // }
        },
      );
  }


 

}
