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
    if (this.rows==null) {
      this.dataService.GetJson().subscribe((result)=>
      {
        this.rows=(JSON.parse(result['_body']));    
      })
    }
    
     this.columns = [
        { prop: 'name' },
        { name: 'Id' },
        { name: 'gender' }
      ];
    
  }
    onSelect({ selected }) {}
   

 

    remove() {

    for (var i = 0; i < this.selected.length; ++i) {
       this.rows=  this.rows.filter(x=>x.id!=this.selected[i].id);
    }
     
     
      this.dataService.AddItem("data",this.rows)
    }
   OpenRowForNew()
   {

     let x={
       "name":null,
       "id": null, 
       "gender": null
     }
     
    
     let dialogRef =  this.dialog.open(PopopComponent, {data: [x]});

       dialogRef.afterClosed().subscribe(result => {
       if (x.name != null && x.id != null && x.gender != null)
       {
          this.rows.push(x);
          this.dataService.AddItem("data",this.rows)
       } 
      });
   }
   OpenRowForEdit()
   {
    
       let dialogRef =  this.dialog.open(PopopComponent, {data: this.selected});

       dialogRef.afterClosed().subscribe(result => {


         this.dataService.AddItem("data",this.rows)
       });

   }

     updateFilter(event) 
     {
       let DbRows:any;
       let val = event.target.value.toLowerCase();
       DbRows=this.dataService.GetItem("data"); 

      this.rows= DbRows.filter(x=> 
                   x.id.indexOf(val)>-1==true ||
                   x.name.toLowerCase().indexOf(val)>-1==true ||
                   x.gender.toLowerCase().indexOf(val)>-1==true
                 )
  }

}


