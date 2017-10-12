import { Component, OnInit ,Inject, ViewChild} from '@angular/core';
import { DataService } from '../../services/data.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { PopopComponent } from '../../popop/popop.component';
import {DatatableComponent} from '@swimlane/ngx-datatable/src/components/datatable.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
private rows:any;
private columns:any;
private selected = [];
private temp:any;

@ViewChild(PopopComponent) table: PopopComponent;

  constructor(private dataService:DataService, private dialog: MatDialog) {
    console.log('constructor ran..');

    this.rows = this.dataService.GetItem("data"); 
      console.log(typeof(this.rows));
      console.log(this.rows);
    if (this.rows==null) {
      this.dataService.GetJson().subscribe((result)=>
      {
        this.rows=(JSON.parse(result['_body']));
         console.log(this.rows);
         console.log(typeof(this.rows));      
      })
    }
    
     this.columns = [
        { prop: 'name' },
        { name: 'Id' },
        { name: 'gender' }
      ];
    
  }
    onSelect({ selected }) {
    
       let dialogRef =  this.dialog.open(PopopComponent, {data: selected});

       dialogRef.afterClosed().subscribe(result => {


         this.dataService.AddItem("data",this.rows)
       });
    }
    onActivate(event) {
      console.log('Activate Event', event);
    }

    add() {
      this.selected.push(this.rows[0], this.rows[0]);
    }

    update() {
      this.selected = [ this.rows[1], this.rows[3] ];
    }

    remove() {
      this.dataService.DeleteItem("data",this.rows)
    }
   OpenRowForNew()
   {

     let x={
       "name": "",
       "id": "", 
       "gender": ""
     }

    this.rows.push(x);
     let dialogRef =  this.dialog.open(PopopComponent, {data: [x]});

       dialogRef.afterClosed().subscribe(result => {


         this.dataService.AddItem("data",this.rows)
      });
   }
     updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    //this.table.offset = 0;
  }

}



