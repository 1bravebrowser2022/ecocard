import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
// component
import { ShareCardComponent } from '../share-card/share-card.component';

@Component({
  selector: 'app-view-received-card',
  templateUrl: './view-received-card.component.html',
  styleUrls: ['./view-received-card.component.css']
})
export class ViewReceivedCardComponent {

  // variable
  data: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public d: any,
    private dialog: MatDialog
  ) {
    this.data = d;
    // console.log(this.data);
  }
  openDialog(data: any) {
    const dialogclose = this.dialog.closeAll();
    const dialogRef = this.dialog.open(ShareCardComponent, {
      height: '80%',
      width: '24%',
      panelClass: 'my-class',
      data: data,
    });
  }

}
