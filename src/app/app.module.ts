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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';



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
    ReactiveFormsModule,
    BrowserAnimationsModule,
   MatButtonModule,
   MatToolbarModule,
   MatSidenavModule,
   MatDialogModule,
   MatSelectModule,
   MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatExpansionModule,
   MatTableModule,
   MatListModule,
   MatIconModule,
   MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
