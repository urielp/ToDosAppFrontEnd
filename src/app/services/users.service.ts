/**
 * Created by parientu on 1/16/2018.
 */
import {Observable} from 'rxjs/Rx';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';
import  'rxjs/add/operator/map';
import User from '../AppModels/user.model';

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  users = `${this.api_url}/users/authenticate`;

  constructor(private httpClient:HttpClient){}

  login(user:User):Observable<any>{
    console.log("Login " + `${this.users}`);
    return this.httpClient.post(`${this.users}`,{username:'uriel',password:'12345'})
      .map(res=>{
        console.log(res);
      });
  }

}
