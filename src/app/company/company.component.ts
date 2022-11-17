import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyService } from '../company.service';
import { Company } from './company';
import { DataSource } from '@angular/cdk/collections';
import { Observable, ReplaySubject } from 'rxjs';

export interface PeriodicElement {

}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private http: HttpClient, private companyService: CompanyService,
    private router: ActivatedRoute, private activate: Router //private fb:FormBuilder
  ) { }

  comObj: Company = new Company();
  ngOnInit(): void {
    if (this.companyService.isUserLoggedIn()) {
      console.log("main ngoninit..");
      this.getCompanyList();
      this.comObj.companyCode = this.router.snapshot.paramMap.get('id');
    } else {
      this.activate.navigate(['/login']);
    }
    //window.location.reload();
  }


  comArr: Array<Company> = [];
  updatedArr: any = {};
  data: {} | any;
  closeResult = '';
  companyDetails: | any;
  //stockListFinal:| any;
  code: number | any;
  name: string | any;
  ceo: string | any;
  website: string | any;
  turnover: number | any;
  sprice: number | any;
  showById: boolean = false;

  addCompanyDetails() {
    this.companyService.addCompany(this.comObj).subscribe(data => {
      this.data = JSON.stringify(data);
      this.comArr.push(this.data);
      alert("Company data saved successfully..!");
      window.location.reload();
      this.activate.navigate(['/company']);
    },
      error => {
        console.log(error);
      })
  }

  getCompanyList() {
    console.log("username " + localStorage.getItem('username'));
    if (this.companyService.isUserLoggedIn()) {
      this.companyService.getAllCompany().subscribe(data => {
        this.data = JSON.stringify(data);
        this.companyDetails = data;
        this.comArr = Object.values(data);
        console.log("sssssss " + this.comObj);
      })
    } else {
      alert("Please login first");
    }

  }

  deleteCompany(cid: number) {
    this.companyService.deleteCompany(cid).subscribe(data => {
      let comIndex = this.comArr.findIndex(c => c.companyCode == cid);
      this.comArr.splice(comIndex, 1);
      alert("Company is deleted..!!");
      this.activate.navigate(['/company']);
      // window.location.reload();
      this.getCompanyList();
      
    });
  }

  updateCompany(companyObj: Company) {
    this.updatedArr = companyObj;
    this.companyService.getCompanyById(companyObj.companyCode).subscribe(
      (data) => {
        data.companyName = companyObj.companyName;
        data.companyCeo = companyObj.companyCeo;
        data.website = companyObj.website;
        data.turnover = companyObj.turnover;
        this.companyService.updateCompany(companyObj).subscribe(
          (d) => {
            this.getCompanyList();
            this.activate.navigate(['/company']);
          },
          (error) => {
            console.log(error);
          });
      });

  }

  comp: Company = new Company();
  compArr: Array<Company> = [];

  getCompanyById(cid: number) {
    console.log("started getCompanyById " + cid);
    this.companyService.getCompanyById(cid).subscribe(data => {
      console.log("data by getCompanyById " + data);
      this.comArr = Object.values(data);
      this.code = this.compArr[0];
      this.name = this.compArr[1];
      this.ceo = this.compArr[2];
      this.website = this.compArr[3];
      this.turnover = this.compArr[4];
      this.sprice = this.compArr[5];
      this.showById = true;
    })
  }

  /* updateCompanyRecord(id: number)
   {
     console.log("id "+id);
      this.companyService.getId(id);
     this.router.navigate(['update-company']);
   }*/

  navigateToLogout() {
    console.log("Logging Off");
    alert("Logging off..");
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.activate.navigate(['/login']);
  }
}