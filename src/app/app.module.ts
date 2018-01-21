import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import {TodoService} from "./services/todo.service";

import { LoginComponent } from './login/login.component';
import {UserService} from "./services/users.service";
import {AuthInterceptor} from "./services/interceptors/auth.service";
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    UsersComponent
  ],
  imports: [
    BrowserModule,NgbModule.forRoot(),FormsModule,HttpClientModule
  ],
  providers: [
    TodoService,
    UserService,
      {
        provide:HTTP_INTERCEPTORS,
        useClass:AuthInterceptor,
        multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
