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
  editList:ToDo[] =[];
  editmode:boolean=false;

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

  submitTodo(event, todo:ToDo){
    if(event.keyCode ==13){
      this.editTodo(todo)
    }
  }

  doneTodo(todo:ToDo){
    todo.status = 'Done'
    this.editmode=true;
    this.todoService.editTodo(todo).subscribe(res => {
      console.log('Update Succesful')
    }, err => {
      this.editTodo(todo)
      console.error('Update Unsuccesful')
      this.editmode=false;
    })
  }

  deleteTodo(todo:ToDo){
    this.todoService.deleteTodo(todo._id)
      .subscribe(res => {
      let index = this.todolist.indexOf(todo);
      this.todolist.splice(index,1);
    });
  }

  editTodo(todo:ToDo){

    this.editmode=true;
    if(this.todolist.includes(todo))
    {
      if(!this.editList.includes(todo)){
        this.editList.push(todo);
      }
      else {
        this.editmode=false;
        let index = this.editList.indexOf(todo);
        this.editList.splice(index,1);
        this.todoService.editTodo(todo)
          .subscribe(res=>{
            console.log("updated");
            this.editmode=false;
          },err=>{
            this.editmode=false;
            this.editTodo(todo);
            console.error("update failed");
          })
      }
    }
  }
}
