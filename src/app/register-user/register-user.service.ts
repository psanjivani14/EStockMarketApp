import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http:HttpClient) { }

  //private apiResister:string= 'http://localhost:8082/consume-register';
  private apiRegisterurl:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/consume-register';
  
registerUser(user:User):Observable<String>
{
  alert("resgistering user..!");
 return this.http.post<String>(`${this.apiRegisterurl}`, user);
}
}
