import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
// services
import { SearchCardsServicesService } from './../../services/search-cards-services/search-cards-services.service';

@Component({
  selector: 'app-serch-card',
  templateUrl: './serch-card.component.html',
  styleUrls: ['./serch-card.component.css'],
})
export class SerchCardComponent implements OnInit {
  // variables
  flag = false;
  toppings = new FormControl('');
  toppingList: string[] = [];
  searchedCardsArray: any[] = [];
  imgSources: any;
  constructor(private serchCardService: SearchCardsServicesService) {}

  // on load calling the services unique categories
  ngOnInit(): void {
    this.serchCardService.findUniqueCategory().subscribe((result: any) => {
      this.toppingList = result.categories;
    });

    this.findFirstCards();
  }

  // on click search button function fire query
  findSearchedCard(v1: any, v2: any) {
    try {
      this.flag = false;
      const obj1 = v1.value;
      const obj2 = v2.value;
      console.log(obj1, obj2);

      if (obj1 === '' && obj2.length === 0) {
        this.findFirstCards();
      } else {
        const obj = { obj1, obj2 };
        this.serchCardService.findCards(obj).subscribe((result) => {
          result.forEach((element: any) => {
            if (element?.logo !== undefined) {
              element.imgSources = `data:logo/png;base64,${btoa(
                String.fromCharCode(...new Uint8Array(element.logo.data.data))
              )}`;
            } else {
              element.imgSources = './../../../assets/images/dummylogo2.png';
            }
          });
          this.searchedCardsArray = result;
          if (result.length === 0) {
            this.flag = !this.flag;
          }
        });
      }
    } catch (error: any) {
      console.error(error);
    }
  }

  // find cards other than user
  findFirstCards() {
    this.serchCardService.findAllCard().subscribe((result: any) => {
      result.cards.forEach((element: any) => {
        if (element?.logo !== undefined) {
          element.imgSources = `data:logo/png;base64,${btoa(
            String.fromCharCode(...new Uint8Array(element.logo.data.data))
          )}`;
        } else {
          element.imgSources = './../../../assets/images/dummylogo2.png';
        }
      });
      this.searchedCardsArray = result.cards;
      if (result.cards.length === 0) {
        this.flag = !this.flag;
      }
    });
  }
}
