import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private http:HttpClient) { }

  ngOnInit(): void {

  }

  userObj:User = new User();
  userArr:Array<User>=[];
  data:{}|any;

  registerUser(user: User){
    this.userService.registerUser(user).subscribe(data=>{
      console.log("Inside registerUser "+data);
      if(data!=null){
        this.userObj = data;
        this.userArr.push(data);
        //console.log("Inside register user: "+this.userObj);
      }else{
          console.log("User not registered successfully");
      }
    
    }, error =>{
      console.log("Error in register user");
    });
  }

  registerUser1(){
    
  }


  /*addUser(user:User)
  {
    this.userservice.addUser(user).subscribe((data)=>{
      this.userArr.push(data);
      console.log("Inside addUser component: userArr is "+this.userArr);
    });
  }*/

}
