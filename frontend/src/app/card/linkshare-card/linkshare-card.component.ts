import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

// services
import { CardServicesService } from './../../services/card-services/card-services.service';

@Component({
  selector: 'app-linkshare-card',
  templateUrl: './linkshare-card.component.html',
  styleUrls: ['./linkshare-card.component.css'],
})
export class LinkshareCardComponent implements OnInit {
  // variables
  status = 'block';
  imgSources: any;
  cid: any;
  data: any;
  clickit() {
    this.status = 'none';
  }
  constructor(
    private cardService: CardServicesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // show specific card by shareable link
  ngOnInit(): void {
    try {
      this.cid = this.route.snapshot.paramMap.get('cid');
      if (!this.cid) throw new Error('cid is required');
      this.cardService
        .readUsersSpecificCard(this.cid)
        .subscribe((result: any) => {
          if (result?.logo !== undefined) {
            result.imgSources = `data:logo/png;base64,${btoa(
              String.fromCharCode(...new Uint8Array(result.logo.data.data))
            )}`;
          } else {
            result.imgSources = './../../../assets/images/dummylogo2.png';
          }
          this.data = result;
        });
    } catch (error) {
      console.error(error);
    }
  }
}
