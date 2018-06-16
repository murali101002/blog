import { AuthService } from '../../services/shared/auth.service';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comment: string;
  public placeholderText = '';

  public comments: any[];
  private ref;

  constructor(private db: AngularFireDatabase, private authService: AuthService, private firebaseApp: FirebaseApp) {
  }

  submitComment() {
    const user = this.authService.getCurrentUser();
    this.ref.child('/comments').push({ name: user['email'], text: this.comment });
  }

  ngOnInit() {
    this.comments = [];
    this.getComments();
    this.ref = this.firebaseApp.database().ref();
  }
  getComments() {
    const ref2 = this.firebaseApp.database().ref().child('/comments');
    ref2.on('value', snapshot => {
      snapshot.forEach(item => {
        this.comments.push(item.val());
      });
      console.log(this.comments);
    },
      error => {
        console.log('Error: ' + error.code);
      });
  }

}
