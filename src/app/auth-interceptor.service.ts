import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authenticationService: AuthenticateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // add authorization header with jwt token if available
      let currentUser = this.authenticationService.currentUser;
      if (currentUser && currentUser.token) {
          request = request.clone({
              setHeaders: { 
                'x-access-token': currentUser.token
              }
          });
      }

      return next.handle(request);
  }
 
}
