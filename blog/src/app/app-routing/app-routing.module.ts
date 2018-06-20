import {HomeComponent} from '../components/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { AuthGaurdService } from 'src/app/gaurds/auth-gaurd/auth-gaurd.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // SaveChangesGuard
  ],
  declarations: []
})
export class AppRoutingModule { }
