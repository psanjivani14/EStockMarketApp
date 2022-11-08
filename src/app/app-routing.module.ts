import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {path: 'company', component:CompanyComponent},
  {path: 'addCompany/page', component:AddCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
