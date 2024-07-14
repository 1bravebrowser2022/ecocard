import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

import { authApi } from '../httpConst';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private toast: NgToastService,
    private route: Router
  ) {}

  onLogin(obj: any): Observable<any> {
    return this.http.post(authApi.login, obj);
  }

  onSignup(obj: any): Observable<any> {
    return this.http.post(authApi.signup, obj);
  }
  onForgot(obj: any, port: any): Observable<any> {
    obj.port = port;
    console.log(obj);

    return this.http.post(authApi.forgotpassword, obj);
  }
  onReset(obj: any): Observable<any> {
    return this.http.post(authApi.resetpassword, obj);
  }

  IsLoggedIn() {
    return this.cookie.get('jwtToken');
  }

  logoutuser() {
    this.cookie.delete('jwtToken');
    if (this.cookie.get('jwtToken')) {
      for (let index = 0; index < 2; index++) {
        this.cookie.delete('jwtToken');
      }
    }
    this.toast.info({ summary: 'logout Successfully.', duration: 2000 });
    this.route.navigate(['']);
  }
}