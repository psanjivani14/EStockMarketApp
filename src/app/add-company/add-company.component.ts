import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CompanyComponent } from '../company/company.component';
import { CompanyService } from '../company.service';
import { AddCompanyService } from './add-company.service';
import { Company } from '../company/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html', 
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:Router, private addService: AddCompanyService
    // private companyComponent:CompanyComponent
    ) { }

  ngOnInit(): void {
    this.setFormState();
  }
  addForm : FormGroup | any;
  comObj:Company = new Company();
  comArr:Array<Company>=[];
  data:{}|any;

  setFormState(){
    this.addForm = this.fb.group({
      companyCode : [0],
      companyName : ['',Validators.compose([Validators.required,Validators.minLength(3)])],
      companyCeo : ['', Validators.required],
      website : ['', Validators.required],
      turnover : ['', Validators.compose([Validators.required,Validators.min(30000000)])],
      stockPrice : ['null']
    });
  }

  /*onSubmit(){
    if(this.addForm.invalid){
      return;
    }else{
      console.log("add-dtls "+this.comObj);
     this.ComService.addCompany(this.comObj);
    // this.route.navigateByUrl('')
    }
  
  }*/
  addCompanyDetails(comObj:Company)
  {
    this.addService.addCompany(this.comObj).subscribe(data=>{
      this.data = JSON.stringify(data);
      this.comArr.push(this.data);
      alert("Company data saved successfully..!");
      window.location.reload();
     this.route.navigate(['/company']);
    },
    error=>{
      console.log(error);
    })
  }
}
