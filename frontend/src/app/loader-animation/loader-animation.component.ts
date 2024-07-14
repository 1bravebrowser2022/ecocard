import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loader-animation',
  templateUrl: './loader-animation.component.html',
  styleUrls: ['./loader-animation.component.css'],
})
export class LoaderAnimationComponent implements OnInit {
  status = 'block';
  constructor(private router: Router) {}
  ngOnInit() {
    setTimeout(() => {
      this.status = 'none';
      this.router.navigate(['/dashboard/receivedcard']);
    }, 5000);
  }
}
