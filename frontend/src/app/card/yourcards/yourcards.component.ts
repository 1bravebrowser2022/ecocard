import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// services
import { CardServicesService } from './../../services/card-services/card-services.service';

// componenets
import { ShowcardComponent } from '../showcard/showcard.component';

@Component({
  selector: 'app-yourcards',
  templateUrl: './yourcards.component.html',
  styleUrls: ['./yourcards.component.css'],
})
export class YourcardsComponent implements OnInit {
  flag = false;
  // variables
  cardsData: any | ShowcardComponent[];
  imgSources: any;
  constructor(
    private dialog: MatDialog,
    private cardsServices: CardServicesService
  ) {}

  // data sending via dialog box
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ShowcardComponent, { data: data ,height :'74%',width :'30%',panelClass: 'my-css-class'
  });
    dialogRef.afterClosed().subscribe();
  }
 // read all users card on page load
  ngOnInit(): void {
    this.readUserAllCardsData(); // calling read data function on page load
    // console.log('aayu');
    
  }
   // read card data
  readUserAllCardsData() {
    this.cardsServices.readUsersAllCard().subscribe((result: any) => {
      result.forEach((element: any) => {
        if (element?.logo !== undefined) {
          element.imgSources = `data:logo/png;base64,${btoa(
            String.fromCharCode(...new Uint8Array(element.logo.data.data))
          )}`;
        } else {
          element.imgSources = './../../../assets/images/dummylogo2.png';
        }
      });
      this.cardsData = result;
      console.log(result);
      if (result.length == 0) 
      {
          this.flag = true;
      }
    });
  }
}
