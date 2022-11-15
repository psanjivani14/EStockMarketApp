import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company/company';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.css']
})
export class GetByIdComponent implements OnInit {

  constructor(private companyService:CompanyService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.company.companyCode= this.route.snapshot.paramMap.get('id');

    this.route.params.subscribe(params=>{
      //let id = params['id'];
      this.companyService.getCompanyById(params['id']).subscribe(data=>{
       // this.data = JSON.stringify(data);
       console.log("data from api "+data);
        this.company = data;
        
      });
    });
  }

  company:Company=new Company();

getCompanyById(cid:number){
   // this.route.navigate(['/company', this.getCompanyById]);
   alert("Getting company details by id "+cid);
   this.companyService.getCompanyById(cid).subscribe(data=>{
     console.log("inside getbyid compo "+data);
     this.company=data;
     console.log("printing companyobject in getbyid component "+this.company);
   })
}


}
