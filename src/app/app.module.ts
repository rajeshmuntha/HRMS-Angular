import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Emp/login/login.component';
import { SignupComponent } from './Emp/signup/signup.component';
import { ForgotpasswordComponent } from './Emp/forgotpassword/forgotpassword.component';
import { Attendance2Component } from './Emp/attendance2/attendance2.component';
import { Error404Component } from './Emp/error404/error404.component';

const appRoute: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', redirectTo: 'Login', pathMatch:'full'},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignupComponent},
  {path: 'ForgotPassword', component: ForgotpasswordComponent},
  {path: 'Attendance2', component: Attendance2Component},
  {path: '**', component: Error404Component},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotpasswordComponent,
    Attendance2Component,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
