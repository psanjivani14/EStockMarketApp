import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './company/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http:HttpClient) 
  { }

  companys : Company[] | any;
  //id? : number;

  /*private apiGet:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/getallcompany';
  private apiPost:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/postcompany';
  private apiDelete:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1';
  private apiUpdate:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/update-company';
  private apiGetById:string ='https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1';*/

  private apiGet:string ='http://localhost:8082/api/v1.0/market/company/getAllCompanyDtl';
  private apiPost:string ='http://localhost:8082/api/v1.0/market/company/addCompany';
  private apiDelete:string ='http://localhost:8082/api/v1.0/market/company/deleteCompany';
  private apiUpdate:string ='http://localhost:8082/api/v1.0/market/company/updateCompany';
  private apiGetById:string ='http://localhost:8082/api/v1.0/market/company/getCompanyId';


  addCompany(comObj:Company):Observable<Company>
  {
    console.log("inside addCompany service "+comObj);
    alert("Company data saved successfully..!"+comObj);
    return this.http.post<Company>(this.apiPost, comObj);
  }

  getAllCompany():Observable<Array<Company>>
  {
    console.log("Token from local storage is "+localStorage.getItem('token'));
    return this.http.get<Array<Company>>(this.apiGet);    
  }

  deleteCompany(cid:number):Observable<Company>
  {
    alert("Company delete successfully..!!");
    return this.http.delete<Company>(`${this.apiDelete}/${cid} `);
    //return this.http.delete<Company>(`${this.apiDelete}/${cid} `, {headers: this.headers});
  }
  
  /*getId(getId:number){
    this.id=getId;
 }*/

  getCompanyById(id:number):Observable<Company>
  {
    alert("Getting company details by id..."+id);
    return this.http.get<Company>(`${this.apiGetById}/${id}`);
    //return this.http.get<Company>(`${this.apiGetById}/${id}`, {headers: this.headers});
  }

  updateCompany(comObj:Company):Observable<Company>
  {
    alert("Updating company details..");
    return this.http.put<Company>(this.apiUpdate, comObj);
   // return this.http.put<Company>(this.apiUpdate, comObj, {headers: this.headers});
  }

  isUserLoggedIn():boolean|false
  {
    if(localStorage.getItem('username') && localStorage.getItem('token')){
      return true;    
    }else{
      return false;
    }
  }
 
}
