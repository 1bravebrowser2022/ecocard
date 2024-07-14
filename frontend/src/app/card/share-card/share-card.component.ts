import { Component, Input, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Clipboard } from '@angular/cdk/clipboard';

// services
import { CardServicesService } from './../../services/card-services/card-services.service';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-share-card',
  templateUrl: './share-card.component.html',
  styleUrls: ['./share-card.component.css'],
})
export class ShareCardComponent implements OnInit {
  // variables
  data: any;
  port: any;
  shareableLink: any;
  public myAngularxQrCode: string | undefined;
  constructor(
    private clipboard: Clipboard,
    @Inject(DOCUMENT) private document: any,
    @Inject(MAT_DIALOG_DATA) public d: any,
    private dialog: MatDialog,
    private cardsServices: CardServicesService,
  ) {
    this.data = d;
  }

  // close dialog box on background click
  closeDialog() {
    const dialogclose = this.dialog.closeAll();
  }

  // genrating link and qr code on load
  ngOnInit() {
    this.port = this.document.location.port
    this.genrateQrAndShareLink();
  }

  // genrated and share link function calling service
  genrateQrAndShareLink() {
    this.cardsServices
      .shareCardServices(this.data._id,this.port)
      .subscribe((result: any) => {
        this.shareableLink = result.link;
        this.myAngularxQrCode = this.shareableLink;
      });
  }

  // copy text function
  copyText(textToCopy: string) {
    this.clipboard.copy(textToCopy);
  }
}
