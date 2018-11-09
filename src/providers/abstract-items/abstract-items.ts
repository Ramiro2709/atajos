import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AbstractItemsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AbstractItemsProvider {

  Localidad_id:number;
  lastName: string;

  constructor(public http: HttpClient) {
    console.log('Hello AbstractItemsProvider Provider');
    //this.firstName = 'Blank';
    //this.lastName = 'Name';
  }

  setLocalidad(Localidad_id) {
    //this.firstName = firstName;
    //this.lastName = lastName; 
    this.Localidad_id = Localidad_id;      
  }

  getLocalidad() {
    //return this.firstName + ' ' + this.lastName;
    return this.Localidad_id;
  }  

}
