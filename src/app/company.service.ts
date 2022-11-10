import { HttpClient } from '@angular/common/http';
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
    console.log("inside getAllCompany service:: "+this.http.get<Array<Company>>(this.apiGet))
    return this.http.get<Array<Company>>(this.apiGet);
    
  }

  deleteCompany(cid:number):Observable<Company>
  {
    alert("Company delete successfully..!!");
    return this.http.delete<Company>(`${this.apiDelete}/${cid} `);
  }
  
  /*getId(getId:number){
    this.id=getId;
 }*/

  getCompanyById(id:number):Observable<Company>
  {
    alert("Serching company details..."+id);
    return this.http.get<Company>(`${this.apiGetById}/${id}`);
  }

  updateCompany(comObj:Company):Observable<Company>
  {
    alert("Updating company details..");
    return this.http.put<Company>(this.apiUpdate, comObj);
  }

 
}
