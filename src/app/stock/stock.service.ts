import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http:HttpClient) { }
  stockList: Stock[]|any;
  

/*private apiGetStock:string="https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/getallcompany";
private apiPosStock:string="https://1oio6tpr5g.execute-api.us-west-2.amazonaws.com/DeploymentStage1/postcompany";*/
private apiGetStock:string="http://localhost:8082/api/v1.0/market/stock/getAllStocks";
private apiPosStock:string="http://localhost:8082/api/v1.0/market/stock/addStock";

  addStock(cid:number, stock:Stock):Observable<Stock>
  {
    alert("Adding stock details...")
    return this.http.post<Stock>(`${this.apiPosStock}/${cid}`, stock);
  }

  getAllStock(cid:number):Observable<Array<Stock>>
  {
    return this.http.get<Array<Stock>>(`${this.apiGetStock}/${cid}`);
  }
}
