/**
 * Created by parientu on 1/15/2018.
 */

import ToDo from '../AppModels/todo.model';
import {Observable} from 'rxjs/Rx';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Injectable} from '@angular/core';
import  'rxjs/add/operator/map';

@Injectable()
export class TodoService{

  api_url = 'http://localhost:3000';
  todoUrl = `${this.api_url}/api/todos`;

  constructor(private httpClient:HttpClient){}


  //create todo,takes a todo object
  createTodo(todo:ToDo):Observable<any>{
    return this.httpClient.post(`${this.todoUrl}`,todo);
  }

  //read todo,no arguments are needed

  getToDos():Observable<ToDo[]>{
    return this.httpClient.get(this.todoUrl)
      .map(res=>{
        return res['data'].docs as ToDo[];
      })
  }

  editTodo(todo:ToDo){
    let editUrl=`${this.todoUrl}`;
    return this.httpClient.put(editUrl,todo);
  }
 deleteTodo(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.todoUrl}/${id}`;
    return this.httpClient.delete(deleteUrl)
      .map(res=>{
        return res;
      })
  }

//Default Error handling method.
  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}
}
