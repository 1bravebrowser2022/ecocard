import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cardApi } from '../httpConst';

// interface
import { cardInterface } from './../../data-type';

@Injectable({
  providedIn: 'root',
})
export class CardServicesService {
  constructor(private http: HttpClient) {}

  // create a new card
  //  req - card data
  createUserCard(data: any) {
    return this.http.post<cardInterface[]>(
      cardApi.createcard,
      data
    );
  }

  // read all user cards
  //  req - none
  readUsersAllCard() {
    // console.log('pa6u aayu');
    return this.http.get<cardInterface[]>(
      cardApi.mycards
    );
  }

  // read specific card
  //  req - card id
  readUsersSpecificCard(cid: any) {
    // console.log('cid at service file : ' + cid);
    return this.http.get<cardInterface[]>(
      cardApi.mycards+`/${cid}`
    );
  }

  // read shared card link api
  //  req - card id
  geustUserCardView(cid: any) {
    return this.http.get<cardInterface[]>(
      cardApi.sharedcard+`/${cid}`
    );
  }

  // update the specific card  detail service
  //  req - card id & data
  updateCardServices(data: any, cid: any) {
    return this.http.put<cardInterface[]>(
      cardApi.updatecard+`/${cid}`,
      data
    );
  }

  // delete specific card of the user
  //  req - card id
  deleteCardServices(cid: any) {
    console.log('Service deleteUserProfile', cid);
    return this.http.delete(
      cardApi.deletecard+`/${cid}`,
    );
  }

  // sharing card api calling
  //  req - card id
  shareCardServices(cid: any,port:any) {
    return this.http.get(
      cardApi.mycards+`/${cid}/share/${port}`
    );
  }

  // finding geofenced user
  //  req - card id
  FindingGeoFencedUsers(cid: any) {
    return this.http.get(
      cardApi.findNearByUser+`/${cid}`
    );
  }

  // update the user's recived cards array
  //  req - card id & data
  updateRecivedCardsArray(data: any, cid: any) {
    console.log("data in updateRecivedCardsArray service file :" +data);
    return this.http.post(
      cardApi.updateRecivedCard+`/${cid}`,
      data
    );
  }
}
