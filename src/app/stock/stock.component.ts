import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { CompanyService } from '../company.service';
//import { CompanyService } from '../company/company.service';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(public stockService: StockService, private http:HttpClient,
     private router:ActivatedRoute, private companyService: CompanyService, private activate:Router
    ) { }

  ngOnInit(): void {
    if(this.companyService.isUserLoggedIn()){
    this.stockObj.comp_code_fk= this.router.snapshot.paramMap.get('id');
    }else{
      alert("User is not logged in");
      this.activate.navigate(['/login']);
    }
    
  }

   stockObj: Stock = new Stock();
   stockArr: Array<Stock> =[];
   data:{} | any;
   companyDetails: any;
  


  getStock(cid:number){
    this.stockService.getAllStock(cid).subscribe(data=>{
      this.data = JSON.stringify(data);
     // this.stockArr = data;
      this.stockArr.push(this.data);
      //this.stockArr = Object.values(data);
      console.log("getting stock arr "+this.stockArr);
    },
    error=>{
      console.log(error);
    })
  }
  
  addStock(cid:number)
  {
    console.log("Started addStock component"+cid);
    this.stockService.addStock(cid, this.stockObj).subscribe(data=>{
      alert("Stock details added successfully..!!")
      console.log("data "+data);
      this.data = JSON.stringify(data);
      this.stockArr.push(this.data);
      alert("Stock data added to Stock and Company");
      window.location.reload;
    });
  }

}
