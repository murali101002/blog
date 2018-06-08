import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Article} from '../../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  // private endpoint = 'https://newsapi.org/v2/top-headlines?' +
  // 'country=us&' +
  // 'apiKey=884a04e85fa544c59b226d205b9d81d6';

private endpoint = '../../../model/articles.json';
  constructor(private http: HttpClient) { }

  // getArticleData(): Observable<any> {
  //   return this.http.get(this.endpoint);
  // }
}
