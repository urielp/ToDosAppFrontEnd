import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/users.service';
import User from "../AppModels/user.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user:User;
  constructor(private userService:UserService) { }


  ngOnInit() {
  }

  login(user:User){

    this.userService.login(this.user);
  }

}
