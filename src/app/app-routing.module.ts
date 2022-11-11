import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AppComponent } from './app.component';
import { CompanyDtlsComponent } from './company-dtls/company-dtls.component';
import { CompanyComponent } from './company/company.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { StockComponent } from './stock/stock.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component:UserComponent},
  {path: 'login', component:UserComponent},
  {path: 'signup', component:RegisterUserComponent},
  {path: 'navigateToCompany', component:CompanyComponent},
  {path: 'company', component:CompanyComponent},
  {path: 'addCompany/page', component:AddCompanyComponent},
  {path: 'addStock/:id',component:StockComponent },
  {path: 'companydtl/:id', component:CompanyDtlsComponent},
  {path: 'update-company/:comObj', component:UpdateCompanyComponent},
  {path: 'register', component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
