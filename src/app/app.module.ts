import { BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { LocalStorageModule } from 'angular-2-local-storage';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';
import { PopopComponent } from './popop/popop.component';
import {MatFormFieldModule} from '@angular/material';

const appRoutes: Routes = [
  {path:'', component:UserComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    PopopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxDatatableModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    HttpModule,
    LocalStorageModule.withConfig({
            prefix: '',
            storageType: 'localStorage'
        }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents:[  PopopComponent ]

  
})
export class AppModule { }
