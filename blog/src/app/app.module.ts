import {CommentsComponent} from './components/comments/comments.component';
import {AuthService} from './services/shared/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

// import { AngularFireLite } from 'angularfire-lite';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { environment } from '../environments/environment';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from 'src/app/services/article/article.service';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticleComponent,
    CommentsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    CommentsService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
