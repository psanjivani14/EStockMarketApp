import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  users : User[] | any;
//  '
//private apiResister:string='http://localhost:8081/auth/user/register-user';

private apiLogin:string='http://localhost:8081/auth/user/login';


loginUser(user:User):Observable<any>
{
  alert("Trying to login user..!");
  return this.http.post<any>(this.apiLogin, user).pipe(
    map(
      (data)=>{
        localStorage.setItem('username', user.username);
        let token='Bearer'+data.token;
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
