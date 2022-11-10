import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompanyService } from '../company.service';
import { Company } from '../company/company';
import { Stock } from '../stock/stock';

@Component({
  selector: 'app-company-dtls',
  templateUrl: './company-dtls.component.html',
  styleUrls: ['./company-dtls.component.css']
})
export class CompanyDtlsComponent implements OnInit {

  constructor(private router:ActivatedRoute, private companyService: CompanyService) { }

   data: {} | any;
   stockObj: Stock = new Stock();
   id: number | any;
   companyDetails : any;
   compArr: {} | any;
   stockArray:Array<Stock>=[];

  ngOnInit(): void {
   this.router.params.subscribe(params=>{
      //let id = params['id'];
      this.companyDetails = this.companyService.getCompanyById(params['id']).subscribe(data=>{
        this.companyDetails = data;
        console.log("printing companyDetails "+this.companyDetails);
        //this.companyDetails = Object.values(data);
        //console.log("printing companyDetails "+this.companyDetails);
      });
    });
  }


}
