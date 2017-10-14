import { Component, Inject, forwardRef, Attribute,OnChanges, SimpleChanges,Input} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import { NG_VALIDATORS,Validator, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-popop',
  templateUrl: './popop.component.html',
  styleUrls: ['./popop.component.css']
})
export class PopopComponent  {
private text: string;
constructor( public dialogRef: MatDialogRef<PopopComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 



}
  
  Save(event) {
   
  this.dialogRef.close(this.data[0]);
  }
  closePop(event) {
  this.dialogRef.close(null);
  }
    replacerID(value: string) {
    this.data[0].id = value.replace(/[^0-9\-]/g, '');
  }
  replacerName(value: string) {
    this.data[0].name = value.replace(/[^a-zA-Z\-\s]/g, '');
  }
}
