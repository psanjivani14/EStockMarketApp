import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company/company';

@Injectable({
  providedIn: 'root'
})
export class AddCompanyService {

  constructor(private http:HttpClient) { }

  addcompanys : Company[] | any;

  private apiPost:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/postcompany';

  addCompany(comObj:Company):Observable<Company>
  {
    console.log("inside addCompany service "+comObj);
    alert("Company data saved successfully..!");
    return this.http.post<Company>(this.apiPost, comObj);
  }
}
