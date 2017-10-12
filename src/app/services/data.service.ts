import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import {Observable} from 'rxjs/Rx';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http,private localStorageService: LocalStorageService) { 
    console.log('Data service connected...');
  }

	AddItem(Key,Value)
	{
		this.localStorageService.set(Key,Value);
	}
	DeleteItem (Key,Value)
	{
		this.localStorageService.remove(Key,Value);
	}
	GetItem(Key)
	{
		return this.localStorageService.get(Key);	
	}

	GetJson(): Observable<any> 
	{
		return  this.http.get('http://localhost:4200/assets/data.json')
				.map((Response) => Response)
	}

 }



