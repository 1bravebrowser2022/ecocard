import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewReceivedCardComponent } from '../view-received-card/view-received-card.component';

// services
import { RecivedCardsServicesService } from './../../services/received-cards-services/recived-cards-services.service';

@Component({
  selector: 'app-received-cards',
  templateUrl: './received-cards.component.html',
  styleUrls: ['./received-cards.component.css'],
})
export class ReceivedCardsComponent implements OnInit {
  // variables
  flag = false;
  imgSources: any;
  cardsDataArray: any;
  constructor(
    private dialog: MatDialog,
    private recivecards: RecivedCardsServicesService
  ) {}

  // data sending via dialog box
  openDialog(data: any) {
    const dialogRef = this.dialog.open(ViewReceivedCardComponent, {
      data: data,
      height: '71%',
      width: '30%',
      panelClass: 'my-css-class',
    });
    dialogRef.afterClosed().subscribe();
  }

  // oninit function for load recivedcards
  ngOnInit(): void {
    this.recivecards.readUsersAllRecivedCard().subscribe((result: any) => {
      console.log("result : (ts file)");
      console.log(result);
      result.cardsArray.forEach((element: any) => {
        if (element?.logo !== undefined) {
          element.imgSources = `data:logo/png;base64,${btoa(
            String.fromCharCode(...new Uint8Array(element.logo.data.data))
          )}`;
        } else {
          element.imgSources = './../../../assets/images/dummylogo2.png';
        }
      });
      this.cardsDataArray = result.cardsArray;
      if (result.cardsArray.length !== 0) {
        this.flag = !this.flag;
      }
    });
  }
}
