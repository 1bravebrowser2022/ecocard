import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
// component
import { ShareCardComponent } from '../share-card/share-card.component';

@Component({
  selector: 'app-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.css'],
})
export class ShowcardComponent {
  // variable
  data: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public d: any,
    private dialog: MatDialog
  ) {
    this.data = d;
  }

  // Dialog box for view specific card
  openDialog(data: any) {
    const dialogclose = this.dialog.closeAll();
    const dialogRef = this.dialog.open(ShareCardComponent, {
      height: '85%',
      width: '24%',
      panelClass: 'my-class',
      data: data,
    });
  }
}
