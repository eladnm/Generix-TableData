import { Component,Inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopopComponent } from '../../popop/popop.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent   {
private rows:any;
private selected = [];

  constructor(private dataService:DataService, private dialog: MatDialog) {

    this.rows = this.dataService.GetItem("data"); 
    if (this.rows==null) {
      this.dataService.GetJson().subscribe((result)=>
      {
        this.rows=(JSON.parse(result['_body']));    
      })
    }
    
  }
  remove() {

    for (var i = 0; i < this.selected.length; ++i) {
       this.rows =  this.rows.filter(x=>x.id!=this.selected[i].id);
    }
        
      this.dataService.AddItem("data",this.rows)
    }
  OpenRowForNew()
   {
     let x ={
       "seq": this.rows[this.rows.length-1].seq+1,
       "name": null,
       "id": null, 
       "gender": null,
       "date": new Date()
     }         
     let dialogRef =  this.dialog.open(PopopComponent, {data: [x]});

       dialogRef.afterClosed().subscribe(result => {
       if (result!=null)
       {
          this.rows.unshift(x);
          this.dataService.AddItem("data",this.rows)
       } 
      });
   }
  OpenRowForEdit()
   {
   
      let ItemBeforEdit = Object.assign({}, this.selected[0]);

      
      let dialogRef =  this.dialog.open(PopopComponent, {data: [this.selected[0]]});



       dialogRef.afterClosed().subscribe(result => {

       if (result==null)
       {
          this.selected[0]=ItemBeforEdit
       } 
       else{
          
       }
         this.dataService.AddItem("data",this.rows)

       
       });
   }

  updateFilter(event) 
     {
       let DbRows:any;
       let val = event.target.value.toLowerCase();
       DbRows = this.dataService.GetItem("data");
      this.rows = DbRows.filter(x=> 
                   x.id.indexOf(val)>-1==true ||
                   x.name.toLowerCase().indexOf(val)>-1==true ||
                   x.gender.toLowerCase().indexOf(val)>-1==true
                 )
  }  
}



