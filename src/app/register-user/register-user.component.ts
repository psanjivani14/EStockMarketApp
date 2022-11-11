import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { UserComponent } from '../user/user.component';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private registerService:RegisterUserService, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  registerObj: User = new User();
  registerArr: Array<User> = [];
  data: {} | any;

  registerUser() {
    this.registerService.registerUser(this.registerObj).subscribe(data => {
      console.log("Inside registerUser " + data);
      alert("User registered successfully..!!");
        this.registerArr.push(this.data);
       // window.location.reload();
        console.log(this.registerArr);
        this.router.navigate(['/login']);
    }, error => {
      alert("Please provide required fileds..!!");
      console.log("Error in register user");
    });
  }

}
