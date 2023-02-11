import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import { environment } from "../../../environments/environment";


@Injectable({
  providedIn: "root",
})
export class ApiUrlInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
      const baseUrl = environment.baseUrl;

      const newLocalReq = req.clone({
        url: baseUrl + req.url,
      });
  
      return next.handle(newLocalReq).pipe(
        catchError((error: any) => {
          if ([403].indexOf(error.status) === -1) {
            req = req.clone({
              url: baseUrl + req.url,
            });
            return next.handle(req)
          } else {
            throw error;
          }
        })
      );
  }
}
