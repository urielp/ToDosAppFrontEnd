/**
 * Created by parientu on 1/16/2018.
 */


class User {
  _id: string;
  username: string;
  password: string;
  email: string;
  token:string;
  admin: boolean;

  constructor() {
    this.username = "";
    this.password = "";
    this.email = "";
    this.admin = false;
  }
}


export default User
