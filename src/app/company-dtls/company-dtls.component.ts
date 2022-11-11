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
   id: number | any;
   //companyDetails : any;
   stockList:Array<Stock>=[];
   companyObj:Company = new Company();
    AvgStockPrice: | any;
    maxStockPrice: | any;
    minStockPrice: | any;

  ngOnInit(): void {
   this.router.params.subscribe(params=>{
      let id = params['id'];
      this.companyService.getCompanyById(id).subscribe(data=>{
       // this.data = JSON.stringify(data);
        this.companyObj = data;
        console.log("printing companyDetails "+this.companyObj);
        this.stockList =  this.companyObj.stockList;
        this.calculateAvgStockPrice();
        //this.companyDetails = Object.values(data);
        //console.log("printing companyDetails "+this.companyDetails);
      });
    });
  }

  calculateAvgStockPrice():void {
      let total = 0;

      let max = 0, min = this.companyObj.stockList[0].stockPrice;
      for(let i = 0; i < this.companyObj.stockList.length; i++){
       const sb = this.companyObj.stockList[i];

       if(sb.stockPrice > max){
         max = sb.stockPrice;
         console.log("maximum " +max);
       }
       
       if(sb.stockPrice < min){
        min = sb.stockPrice;
        console.log("minimum " +min);
       }

       total = total +sb.stockPrice;
       console.log("total: " +total);
      }

      this.AvgStockPrice = total / this.companyObj.stockList.length;
      this.maxStockPrice = max;
      this.minStockPrice = min;
      console.log("Avarage stock price:: "+this.AvgStockPrice);
      console.log("Maximum stock price:: "+this.maxStockPrice);
      console.log("Minimum stock price:: "+this.minStockPrice);
  }

  

}
