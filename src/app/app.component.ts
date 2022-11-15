import { Component } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company/company';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EStockMarketApp';

}
