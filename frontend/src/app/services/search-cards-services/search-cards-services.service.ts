import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cardInterface } from './../../data-type';
import { searchApi } from "../httpConst";

@Injectable({
  providedIn: 'root',
})
export class SearchCardsServicesService {
  constructor(private http: HttpClient) {}

  // find all unique categories from database
  findUniqueCategory() {
    return this.http.get<cardInterface[]>(
      searchApi.category
    );
  }

  findAllCard() {
    return this.http.get<cardInterface[]>(
      searchApi.allCards
    );
  }

  // call the search api (query based api)
  // req - parms (query object convert to the string)
  findCards(query: any) {
    let str: String = '';

    if (query?.obj1 !== '') {
      str += `btitle=${query.obj1}`;
    }
    if (query?.obj2 !== '') {
      str += `&category=${query.obj2.join(',')}`;
    }

    return this.http.get<cardInterface[]>(
      searchApi.searchBaseApi+str
    );
  }
}
