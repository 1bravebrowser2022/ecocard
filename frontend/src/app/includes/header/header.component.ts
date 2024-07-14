import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { UserAuthService } from './../../services/userAuth/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public acService: UserAuthService, private route: Router) {}
  menuType: boolean = false;
  ngOnInit(): void {
  }
}
