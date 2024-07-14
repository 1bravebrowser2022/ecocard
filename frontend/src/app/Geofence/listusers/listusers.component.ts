import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

// services
import { CardServicesService } from './../../services/card-services/card-services.service';
@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css'],
})
export class ListusersComponent implements OnInit {
  // variables
  toppingList: any[] = [];
  selectedUsersArray: any[] = [];
  cid: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public d: any,
    private dialog: MatDialog,
    private cardServices: CardServicesService,
    private router: Router,
    private toast: NgToastService
  ) {
    this.cid = d;
  }

  // close dialog
  closeDialog() {
    const dialogclose = this.dialog.closeAll();
    // console.log(data);
  }

  // find geofenced user on page load
  ngOnInit(): void {
    this.cardServices
      .FindingGeoFencedUsers(this.cid)
      .subscribe((results: any) => {
        this.toppingList = results.userListId;
      });
  }

  // update the reciving card array of selected users
  updateRecivedCardsOfUser(data: any) {
    Object.keys(data).map((index) => {
      if (data[index] !== false) {
        this.selectedUsersArray.push(data[index]);
      }
    });
    console.log('selectedUsersArray at ts file:' + this.selectedUsersArray);
    this.cardServices
      .updateRecivedCardsArray(this.selectedUsersArray, this.cid)
      .subscribe((result: any) => {
        console.log(result);
        if (result) {
          this.toast.success({ summary: 'Card Shared..!', duration: 2000 });
        } else {
          this.toast.error({
            summary: 'Oops.. Something went wrong, Try again..',
            duration: 2000,
          });
          this.router.navigate(['/dashboard/geofence']);
        }
      });
  }
}
