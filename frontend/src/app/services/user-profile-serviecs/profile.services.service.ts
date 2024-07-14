import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// interface
import { userProfileInterface } from './../../data-type';

// constant 
import { userApi } from '../httpConst';

@Injectable({
  providedIn: 'root',
})

export class ProfileServicesService {
  coordinates: any;
  constructor(private http: HttpClient) {}

  // read user profile api
  readUserProfile() {
    return this.http.get<userProfileInterface[]>(
      userApi.myprofile
    );
  }

  // update user profile api
  updateUserProfile(data: any) {
    return this.http.put<userProfileInterface[]>(
      userApi.updateprofile,
      data
    );
  }

  // delete user profile api
  deleteUserProfileApi() {
    return this.http.delete(userApi.deleteprofile);
  }

  // location update of user profile api
  locationUpdater() {

    // use for get location coordinate
    navigator.geolocation.getCurrentPosition((position) => {
      this.coordinates = [position.coords.latitude, position.coords.longitude];
      console.log('coordinates : ', this.coordinates);
      return this.http
        .post(
          userApi.locationUpdation,
          this.coordinates
        )
        .subscribe((result: any) => {
          console.log(result);
        });
    });
  }
}
