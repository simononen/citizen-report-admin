import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from 'src/app/auth/_services/auth.service';
// App import
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthService, private router: Router) { }

      intercept(req: HttpRequest<any>, next: HttpHandler):
      Observable<HttpEvent<any>> {
      // console.log('interceptor running');
      // Get the token from auth service.
      const authToken = this.auth.getToken();
      if (authToken) {
        // Clone the request to add the new header.
        const authReq = req.clone(
          {
            headers:
              req.headers.set('Authorization', `Bearer ${authToken}`)
          }
        );
        // console.log('interceptor running with new headers');
        // send the newly created request
        return next.handle(authReq).pipe(
                  tap((event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                      // Response with HttpResponse type
                      // console.log('TAP function', event);
                    }
                  }, (err: any) => {
                    console.log(err);
                    if (err instanceof
                      HttpErrorResponse) {
                      if (err.status === 401) {
                        localStorage.removeItem('token');
                        this.router.navigate(['/']);
                      }
                    }
                  })
                );
              } else {
                // console.log('interceptor without changes');
                return next.handle(req);
              }
        }
}
