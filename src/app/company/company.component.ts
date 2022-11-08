import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private http:HttpClient, private companyService:CompanyService, //private fb:FormBuilder
    ) { }
  
  ngOnInit(): void {
    //window.location.reload();
    this.getCompanyList();
  }

  comObj:Company = new Company();
  comArr:Array<Company>=[];
  updatedArr: any ={};
  data:{}|any;

  addCompanyDetails()
  {
    this.companyService.addCompany(this.comObj).subscribe(data=>{
      this.data = JSON.stringify(data);
      this.comArr.push(this.data);
      alert("Company data saved successfully..!");
      window.location.reload();
    },
    error=>{
      console.log(error);
    })
  }

  getCompanyList(){
   this.companyService.getAllCompany().subscribe(data=>{
     this.data = JSON.stringify(data);
     this.comArr = Object.values(data);
     console.log("sssssss "+this.comObj);
   })
  }

  deleteCompany(cid:number){
    this.companyService.deleteCompany(cid).subscribe(data=>{
      let comIndex = this.comArr.findIndex(c=>c.companyCode==cid);
      this.comArr.splice(comIndex, 1);
      alert("Company is deleted..!!");
      window.location.reload();
      this.getCompanyList();
    })
  }

  updateCompany(companyObj:Company){
    this.updatedArr=companyObj;
    this.companyService.getCompanyById(companyObj.companyCode).subscribe(
      (data)=>{
        data.companyName=companyObj.companyName;
        data.companyCeo=companyObj.companyCeo;
        data.website=companyObj.website;
        data.turnover=companyObj.turnover;
        this.companyService.updateCompany(companyObj).subscribe(
          (d)=>{
            this.getCompanyList();
          } ,
    (error)=>{
      console.log(error);
    })
  })

}

  comp:Company = new Company();
  compArr: Array<Company>=[];

  getCompanyById(cid:number)
  {
    this.companyService.getCompanyById(cid).subscribe(data=>{
      console.log("comp component data "+this.data);
      this.compArr = Object.values(data);
      console.log("comp component compArr "+this.compArr);
     // this.data = JSON.stringify(data);
     this.comp = data;
     console.log("comp component  comp "+this.comp);
      alert("Serch result is given.!");

    })
  }

}
