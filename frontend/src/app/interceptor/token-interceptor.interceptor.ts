import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { NgToastService } from 'ng-angular-popup';

// services
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {
  tokendata: any;
  constructor(private toast: NgToastService, private cookie: CookieService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // if (!this.cookie.get('jwtToken')) {
      request = request.clone({
        setHeaders: {
          jwtToken: this.cookie.get('jwtToken'),
        },
      });
    // }
    return next.handle(request).pipe(catchError(this.errorHandle));
  }
  errorHandle(error: HttpErrorResponse) {
    this.toast.error({
      detail: 'Error',
      summary: 'error while fetching token',
      duration: 5000,
    });
    return throwError(error.message || 'server error');
  }
}
