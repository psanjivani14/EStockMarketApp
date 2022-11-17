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
  myDateValue: Date | undefined;
  toDate:Date | undefined;
  duplicateArray=[]
  array: [] | any;
filterStock:Array<Stock>=[];
show:boolean =true;
  showByFilter:boolean=false;


  constructor(private router:ActivatedRoute, private companyService: CompanyService, private activate:Router) { }

   data: {} | any;
   id: number | any;
   companyDetails : any;
   stockList:Array<Stock>=[];
   companyObj:Company = new Company();
    AvgStockPrice: | any;
    maxStockPrice: | any;
    minStockPrice: | any;
    sb:Stock=new Stock();

  ngOnInit(): void {
    if(this.companyService.isUserLoggedIn()){
      this.router.params.subscribe(params=>{
        //let id = params['id'];
        this.companyService.getCompanyById(params['id']).subscribe(data=>{
         // this.data = JSON.stringify(data);
         console.log("data from api "+data);
          this.companyObj = data;
          console.log("printing companyDetails "+this.companyObj);
          this.stockList =  this.companyObj.stockList;
          this.calculateAvgStockPrice();
          
        });
      });
      this.myDateValue = new Date("12-08-2019");
    this.duplicateArray=this.array;
    }else{
      alert("User is not logged in");
      this.activate.navigate(['/login']);
    }
   
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

   stockFilter(filterinput: string){
     console.log("inside stockFilter ")
     filterinput=filterinput.substring(0,10);
    let count=0;
    let length=this.stockList.length;
    this.stockList.filter(()=>{
      for(let d of this.stockList){
       let time=d.issueAt.substring(0,10);
       count=count +1;
       if(time===filterinput && count<=length){
          this.filterStock.push(d);
       }
      }
      this.show =false;
      this.showByFilter=true;
      this.getStockpricebyFilter();
    });

   }

   getStockpricebyFilter():void {
    let total = 0;
    let max = 0, min = this.filterStock[0].stockPrice;
    for(let i = 0; i < this.filterStock.length; i++){
     const sb = this.filterStock[i];

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

    this.AvgStockPrice = total / this.filterStock.length;
    this.maxStockPrice = max;
    this.minStockPrice = min;
    console.log("Avarage stock price:: "+this.AvgStockPrice);
    console.log("Maximum stock price:: "+this.maxStockPrice);
    console.log("Minimum stock price:: "+this.minStockPrice);
}

}


