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
  dataa:string|any;

  registerUser() {
    this.registerService.registerUser(this.registerObj)
    .subscribe((dataa:any) => {
      console.log("Inside registerUser "+dataa);
      alert("User registered successfully..!!");
        this.router.navigate(['/login']);
    });
  }

}
