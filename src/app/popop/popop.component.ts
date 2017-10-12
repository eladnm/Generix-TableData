import { Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';

@Component({
  selector: 'app-popop',
  templateUrl: './popop.component.html',
  styleUrls: ['./popop.component.css']
})
export class PopopComponent  {

  constructor( public dialogRef: MatDialogRef<PopopComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }
  

  Save(event) {
  this.dialogRef.close(this.data[0]);
  }

}
