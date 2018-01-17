import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TodoService} from "./services/todo.service";

import { LoginComponent } from './login/login.component';
import {UserService} from "./services/users.service";



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,HttpClientModule
  ],
  providers: [TodoService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
