/**
 * Created by parientu on 1/16/2018.
 */
import {Observable} from 'rxjs/Rx';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';
import  'rxjs/add/operator/map';
import User from '../AppModels/user.model';
import {_catch} from "rxjs/operator/catch";

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  users = `${this.api_url}/api/users`;


  api2_url = 'http://localhost:3000';
  todoUrl = `${this.api_url}/api/todos`;


  constructor(private httpClient:HttpClient){}

  getToDos(){
    console.log("Hello");
    try{
    return this.httpClient.get('http://localhost:3000/api/users').subscribe(data=>{
      console.log(data);
    });

    }
    catch(exception){
      console.log(exception);
    }
  }

  login(user):Observable<any>{
    try {
      console.log(`${this.users}/authenticate`);
      return this.httpClient.post(`${this.users}/authenticate`,{body:user})
        .map(res=> {
         return res;
        });
    }
    catch(exception){console.log(exception.message);}
  }

  getUser(user:User):Observable<User>{
    try {
      return this.httpClient.get<User>(`${this.users}/user/`+user._id)
        .map(res=> {
          console.log(res);
          return res['data'].docs as User;
        });
    }
    catch(exception){console.log(exception.message);}
  }
}
