/**
 * Created by parientu on 1/15/2018.
 */

class ToDo{
  _id:string;
  title:string;
  description:string;
  date:Date;
  status:string;
  test:boolean;
constructor(){
  this.title = "";
  this.description = "";
  this.date = new Date();
  this.status = "";
}

}

export default ToDo
