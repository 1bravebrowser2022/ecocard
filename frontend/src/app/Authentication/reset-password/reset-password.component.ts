import { Component } from '@angular/core';
import { UserAuthService } from './../../services/userAuth/user-auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent{

  // variabales
  resetobj: any = {
    password: '',
    confromPassword: '',
  };

  constructor(
    private acService: UserAuthService,
    private route: Router,
    private cookie: CookieService
  ) {}

// reset password function   
  onReset() {
    this.acService.onReset(this.resetobj).subscribe((res: any) => {
      this.route.navigateByUrl('/auth');
    });
  }
}
