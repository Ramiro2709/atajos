import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { DetallesPage } from '../detalles/detalles';

/**
 * Generated class for the MostrarTelefonosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostrar-telefonos',
  templateUrl: 'mostrar-telefonos.html',
})
export class MostrarTelefonosPage {

  items: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private provider:AbstractItemsProvider) {
    console.log("Pagina: Mostrar-telefonos");
    //Para que ande el post
    const httpOptions = { 
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': ''
      })
    };
    this.cargar_telefonos();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarTelefonosPage');
  }

  cargar_telefonos(){
    console.log("Cargar Telefonos:");
    var longitud : any;
    
    this.items = [];
    var datos_consulta = JSON.stringify({
      localidad: this.provider.Localidad_id,
      categoria: this.provider.Categoria_id,
      tipo_localidad: this.provider.Tipo_localidad
    });
    var ip_gettelefonos = this.provider.ip_carpeta+"get_telefonos.php";

    console.log(ip_gettelefonos);
    this.http
    .post<string>(ip_gettelefonos,datos_consulta)
    .subscribe((data : any) =>
    {
      longitud = data['lenght'];
      console.log("lengh consulta: "+longitud);
      for(let i = 0; i < longitud; i++){
        //alert(this.ip);
        //console.dir(data);
        //console.log(data[i][0]);
        this.items.push({
            nombre: data[i][0],
            direccion: data[i][1],
            telefono: data[i][2],
            pagina: data[i][3],
            id: i
          });
          //console.log(items);
        
      } //Fin For
      //alert(this.items[0]['nombre']);
    },
    (error : any) =>
    {

    });
  } //Fin

  ver_detalles(item){
    //alert(item.text);
    console.log(item);
    this.navCtrl.push(DetallesPage, { //Que vaya a pagina detalles
      item:item
    });
  }
}
