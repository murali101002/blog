import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  public comment: string;
  public placeholderText = '';

  constructor() { }

  ngOnInit() {
  }

}
