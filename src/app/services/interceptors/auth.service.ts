import { Injectable, Injector } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import {HttpParams} from "@angular/common/http";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("intercepted request ... ");

// Clone the request to add the new header.
   // const authReq = req.clone({ headers: req.headers.set("headerName","headerValue")});
    let params = new HttpParams();
    params = params.append('var1', '11');
    params = params.append('var2', '22');
console.log('req url' +req.url );
    const authReq = req.clone(
      {

        headers: req.headers.set('x-access-token', localStorage.getItem('token'))

      }
      );

    console.log(authReq.params);
    console.log("Sending request with new header now ...");
    console.log(authReq);

//send the newly created request
    return next.handle(authReq)
      .catch((error, caught) => {
//intercept the respons error and displace it to the console
        console.log("Error Occurred");
        console.log(error.message);
//return the error to the method that called it
        return Observable.throw(error);
      }) as any;
  }
}
