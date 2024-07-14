import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './../../services/userAuth/user-auth.service';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  // variables
  port: any;
  forgotobj: any = {
    email: '',
  };
  constructor(
    private acService: UserAuthService,
    private route: Router,
    private cookie: CookieService,
    @Inject(DOCUMENT) private document: any
  ) {}

  ngOnInit(): void {
    // port number
    this.port = this.document.location.port;
  }
  
  // forgot password function 
  onForgot() {
    this.acService.onForgot(this.forgotobj, this.port).subscribe((res: any) => {
      this.cookie.set('jwtToken', res.token, { expires: 1 });  
    });
  }
}
