import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company/company';

@Injectable({
  providedIn: 'root'
})
export class UpdateCompanyService {

  constructor(private http:HttpClient) { }

  private apiUpdate:string ='http://localhost:8082/api/v1.0/market/company/updateCompany';


  updateCompany(comObj:Company):Observable<Company>
  {
    alert("Updating company details..");
    return this.http.put<Company>(this.apiUpdate, comObj);
  }
}
