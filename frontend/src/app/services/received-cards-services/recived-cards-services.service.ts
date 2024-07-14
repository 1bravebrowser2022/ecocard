import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cardInterface } from './../../data-type';
import { cardApi } from '../httpConst';

@Injectable({
  providedIn: 'root',
})
export class RecivedCardsServicesService {
  constructor(private http: HttpClient) {}

  // read all recived cards
  // req - none
  readUsersAllRecivedCard() {
    return this.http.get<cardInterface[]>(
      cardApi.recivecards
    );
  }
}
