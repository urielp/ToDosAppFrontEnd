import {Component, OnInit} from '@angular/core';
import {TodoService} from "./services/todo.service";
import ToDo from "./models/todo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private todoService:TodoService){

  }

  public newTodo:ToDo=new ToDo();

  todolist:ToDo[];

  ngOnInit(){
    this.todoService.getToDos()
      .subscribe(todos=>{
        this.todolist=todos;
        console.log(todos);
      })
  }

  create() {
    this.todoService.createTodo(this.newTodo)
      .subscribe((res) => {
        this.todolist.push(res.data);
        this.newTodo = new ToDo();
      })
  }

  deleteTodo(todo:ToDo){
    this.todoService.deleteTodo(todo._id)
      .subscribe(res => {
      let index = this.todolist.indexOf(todo);
      this.todolist.splice(index,1);
    });
  }
}
