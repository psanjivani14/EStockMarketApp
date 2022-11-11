import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  private apiResister:string= 'http://localhost:8082/consume-register';
  private apiRegisterlocalurl:string ='http://localhost:8081/auth/user/register-user';
  
  registerUser(user:User):Observable<User>
{
  alert("resgistering user..!");
 // return this.http.post<User>(`${this.apiResister}`, user);
 return this.http.post<User>(`${this.apiRegisterlocalurl}`, user);
}
}
