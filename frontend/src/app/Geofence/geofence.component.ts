import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// services
import { ProfileServicesService } from './../services/user-profile-serviecs/profile.services.service';

// components
import { ListusersComponent } from './listusers/listusers.component';

@Component({
  selector: 'app-geofence',
  templateUrl: './geofence.component.html',
  styleUrls: ['./geofence.component.css'],
})
export class GeofenceComponent implements OnInit {
  status = "block";
  // variables
  cid: any;
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private profileServicesService: ProfileServicesService
  ) {}

  // open dialog on click of sender
  openDialog() {
    console.log(this.cid);

    if (this.cid !== null && this.cid !== '') {
      const dialogRef = this.dialog.open(ListusersComponent, {
        height: '45%',
        width: '20%',
        data: this.cid,
      });
    } else {
      this.router.navigate(['/dashboard/mycard']);
    }
  }

  // update the location on page load
  ngOnInit(): void {
    this.cid = this.route.snapshot.paramMap.get('cid');
    this.updateGeoLocation();
  }

  // update the location
  updateGeoLocation() {
    this.profileServicesService.locationUpdater();
  }
}
