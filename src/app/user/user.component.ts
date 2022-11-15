import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, private http: HttpClient, private router:Router,
     public companyservice:CompanyService) { }

  ngOnInit(): void {

  }
  userObj: User = new User();
  userArr: Array<User> = [];
  data: {} | any;
  

  loginUser(){
    this.userService.loginUser(this.userObj).subscribe((response:any)=>{
      if(response.token == null){
        alert("User logged in  successfully..!!");
        console.log(response);
        this.router.navigate(['/company']);
      }else{
        alert("Please provide valid credentials");
      }
      
    }, error=>{
      alert("Please provide valid credentials..");
     // alert("Error in logged in");
    });
  }

  username: string = "";
  password: string = "";
  show: boolean = false;
  submit() {
    console.log("user name is " + this.username)
    this.clear();
  }
  clear() {
    this.username = "";
    this.password = "";
    this.show = true;
  }

}
