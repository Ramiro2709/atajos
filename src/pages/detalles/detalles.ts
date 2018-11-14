import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CallNumber} from '@ionic-native/call-number';

/**
 * Generated class for the DetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    console.log('ionViewDidLoad DetallesPage');
  }

  Llamar(numero){
    console.log(numero);
    this.CallNumber.callNumber(numero,true)
    .then(res => console.log("Funco",res))
    .catch(err => console.log("No Funco",err))
  }

}
