import { Welcome } from './welcome';
import { SignUp } from './signup/signup';
import { Login } from './login/login';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,Login,SignUp,Welcome
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/welcome', pathMatch: 'full' },
      { path: 'login', component: Login},
      { path: 'signup', component: SignUp},
      { path: 'welcome', component: Welcome}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
