import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgToastService } from 'ng-angular-popup';

// services
import { UserAuthService } from './../../services/userAuth/user-auth.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css'],
})
export class UserAuthComponent {
  // variables
  signupusers: any[] = [];
  signupobj: any = {
    name: '',
    email: '',
    password: '',
    contect: '',
  };
  loginObj: any = {
    email: '',
    password: '',
  };

  constructor(
    private acService: UserAuthService,
    private route: Router,
    private cookie: CookieService,
    public toast: NgToastService
  ) {}

  // Signup function calling onSignUp of UserAuthService
  onSignUp() {
    this.acService.onSignup(this.signupobj).subscribe(
      (res: any) => {
        this.cookie.set('jwtToken', res.token, { expires: 1 });
        this.route.navigateByUrl('/home');
      },
      (error) => {
        this.toast.error({
          summary: 'Something went wrong',
          duration: 5000,
        });
      }
    );
  }
  // Signin function calling onSignin of UserAuthService
  onLogin() {
    this.acService.onLogin(this.loginObj).subscribe(
      (res: any) => {
        this.cookie.set('jwtToken', res.token, { expires: 1 });
        this.route.navigateByUrl('/home');
        this.toast.success({
          summary: 'Logged in Successfully..',
          duration: 5000,
        });
      },
      (error) => {
        this.toast.error({
          summary: 'Username or Password incorrect, Try again...',
          duration: 5000,
        });
      }
    );
  }
}
