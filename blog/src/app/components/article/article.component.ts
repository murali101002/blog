import { Component, OnInit } from '@angular/core';
import {Article} from '../../interfaces/article';
import {Observable} from 'rxjs';
import { ArticleService } from '../../services/article/article.service';
import * as articles from '../../../model/articles.json';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  public articleData;

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    // this.articleService.getArticleData().subscribe(data => console.log(data));
    this.articleData = articles;
    // console.log('articles', articles);
    // console.log(this.articleData);
  }

}
