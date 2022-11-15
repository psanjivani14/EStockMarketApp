import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CompanyService } from '../company.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  constructor(private http:HttpClient) { }
  users : User[] | any;
//  '
//private apiResister:string='http://localhost:8081/auth/user/register-user';

private apiLogin:string='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/consume-login';


loginUser(user:User):Observable<any>
{
  alert("Trying to login user..!");
  return this.http.post<any>(`${this.apiLogin}`, user).pipe(
    map(
      (data)=>{
        localStorage.setItem('username', user.username);
        let token='Bearer '+data.toekn;
        console.log("printing token "+token);
        localStorage.setItem('token', token);
        return data;
      }
    )
  );
}

getAllUser():Observable<Array<User>>
{
  alert("Fetching all users..!");
  return this.http.get<Array<User>>("");
}

}
