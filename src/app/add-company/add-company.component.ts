import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setFormState();
  }
  addForm : FormGroup | any;

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

}
