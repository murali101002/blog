import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: Observable<firebase.User>;
  private currentUser: firebase.User = null;

  constructor(private angularAuth: AngularFireAuth) {
    this.authState = this.angularAuth.authState;
    this.authState.subscribe(user => {
      if (user) {
        this.currentUser = user;
      } else {
        this.currentUser = null;
      }
    });
   }

   isAuthenticated(): boolean {
     const token = localStorage.getItem('token');
     console.log('token', token);
     return (token && token.length > 0) ? true : false;
   }

   getAuthState() {
     return this.authState;
   }
   getCurrentUser() {
     return this.currentUser;
   }
}
