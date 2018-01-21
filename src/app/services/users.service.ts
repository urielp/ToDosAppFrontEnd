/**
 * Created by parientu on 1/16/2018.
 */
import {Observable} from 'rxjs/Rx';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import  'rxjs/add/operator/map';
import User from '../AppModels/user.model';


@Injectable()
export class UserService {

  private api_url = 'http://localhost:3000';
  private users = `${this.api_url}/login`;


  constructor(private httpClient: HttpClient) {
  }

  getToDos() {
    console.log("Hello");
    try {
      return this.httpClient.get('http://localhost:3000/api/users').subscribe(data=> {
        console.log(data);
      });

    }
    catch (exception) {
      console.log(exception);
    }
  }

  login(user): Observable<any> {
    try {
      console.log(`${this.users}/authenticate`);
      return this.httpClient.post(`${this.users}/authenticate`, user)
        .map((res)=> {
          if (res) {
            console.log(res);
            return res;
          }
          else {
            console.log(res);
          }
        });
    }
    catch (exception) {
      console.log("here");
    }
  }

  getUser(user: User): Observable<User> {
    try {
      return this.httpClient.get<User>(`${this.users}/user/` + user._id)
        .map(res=> {
          console.log(res);
          return res['data'].docs as User;
        });
    }
    catch (exception) {
      console.log(exception.message);
    }
  }

  getUsersList(): Observable<any> {
    try {
      return this.httpClient.get('http://localhost:3000/api/users/usersList')
        .map(res=> {
          console.log('My response');
          console.log(res['success']);
          if( res['success']=== true){
            console.log('response ok');
            var dataToreturn=res['data'];
            return {
              success:true,
              data:dataToreturn,
              message:'Great!'}
          }
          else{
            console.log("response not ok");
            return {
              success:false,
              data:{},
              message:'Oy Vai !!\n'+res['message']}
          }
        });
    }
    catch (exception) {
      console.log(exception.message);
    }
  }
}
