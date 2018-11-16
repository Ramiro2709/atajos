import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private CallNumber:CallNumber) {
    this.item = navParams.get('item');
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('Pagina: Detalles');
  }

  Llamar(numero){
    console.log(numero);
    console.log("prueba git 3");
    this.CallNumber.callNumber(numero,true)
    .then(res => console.log("Funco",res))
    .catch(err => console.log("No Funco",err))
  }

 
}

