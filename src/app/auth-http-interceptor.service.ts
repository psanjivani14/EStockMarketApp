import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthHttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Printing req "+req);
    let tokenstr = localStorage.getItem('token');
    console.log("Printing token in interceptor class "+tokenstr);
    if(localStorage.getItem('token') && localStorage.getItem('username')){
      req = req.clone({
       headers: req.headers.set('Authorization', ''+tokenstr)
      });
    }
    return next.handle(req);
  }
}
