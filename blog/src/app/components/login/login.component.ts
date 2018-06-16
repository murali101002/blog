import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private af: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login() {
    // tslint:disable-next-line:max-line-length
    this.af.auth.signInWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .then(user => {
        console.log(user);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }
  register() {
    // tslint:disable-next-line:max-line-length
    this.af.auth.createUserWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
      .then(user => {
        console.log(user);
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.errorMessage = error.message;
      });
  }

}
