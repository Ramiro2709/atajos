import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http'; //// Para que tome al php
import { HttpHeaders } from '@angular/common/http';
import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

@Component({
  selector: 'page-municipios',
  templateUrl: 'municipios.html'
})
export class MunicipiosPage {
  items: any[];
  longitud : any;
  constructor(public navCtrl: NavController,  public http: HttpClient,  private provider:AbstractItemsProvider) {
    this.items = [];
    var ip_getmunicipios = this.provider.ip_carpeta+"get_municipios.php";

    console.log(ip_getmunicipios);
    this.http.get(ip_getmunicipios)
    .subscribe((data : any) =>
      {
        this.longitud = data['lenght'];
        console.log(this.longitud);
        for(let i = 0; i < this.longitud; i++){
          //console.log(data[i][0]);
            this.items.push({
              nombre: data[i]['nombre_municipio'],
              id_municipio: data[i]['id_municipio'],
              id: i
            });  
        } //Fin For
      },
      (error : any) =>
      {
        
      });
  } //Fin constructor

  ver_municipio(){

  }
  
}
