import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: UserAuthService, private route: Router){}
  canActivate() {
    if(this.auth.IsLoggedIn()){
      return true;
      this.route.navigate(['/home'])
    }
    else{
    // alert("you have not logged in");
    this.route.navigate(['']);
    return false;
    }
  }

  
}
