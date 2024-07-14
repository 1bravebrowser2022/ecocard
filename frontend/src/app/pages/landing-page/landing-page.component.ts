import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private route:Router , private http:HttpClient){}

  submit(){
    this.route.navigate(['/signup'])
    this.route.navigate(['/login'])
    this.route.navigate(['/landigpage'])
  }
}
