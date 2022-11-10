import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCompanyComponent } from './add-company/add-company.component';
import { StockComponent } from './stock/stock.component';
import { CompanyDtlsComponent } from './company-dtls/company-dtls.component';
import { UpdateCompanyComponent } from './update-company/update-company.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    HeaderComponent,
    FooterComponent,
    AddCompanyComponent,
    StockComponent,
    CompanyDtlsComponent,
    UpdateCompanyComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
