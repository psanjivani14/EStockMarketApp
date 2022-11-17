import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company/company';
import { UpdateCompanyService } from './update-company.service';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {
    company:Company = new Company();
    updatedArr: any ={};
  constructor(private router:Router, private updateService:UpdateCompanyService, 
    private rou:ActivatedRoute, private  companyService:CompanyService) { }

  ngOnInit(): void {
    this.company.companyCode = this.rou.snapshot.paramMap.get('id');
      this.companyService.getCompanyById(this.company.companyCode).subscribe(data=>{

      });
  }

 updateCompany(companyObj:Company){
   console.log(companyObj);
  this.updatedArr=companyObj;
  this.companyService.getCompanyById(companyObj.companyCode).subscribe(
    (data)=>{
      data.companyName=companyObj.companyName;
      data.companyCeo=companyObj.companyCeo;
      data.website=companyObj.website;
      data.turnover=companyObj.turnover;
      this.updateService.updateCompany(companyObj).subscribe(
        (d)=>{
          this.companyService.getAllCompany();
        } ,
  (error)=>{
    console.log(error);
  });
});
}
}
