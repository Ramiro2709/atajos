import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ROGallegosPage } from '../r-ogallegos/r-ogallegos';

import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

@Component({
  selector: 'page-r-ogallegos',
  templateUrl: 'r-ogallegos.html'
})
export class ROGallegosPage {

  constructor(public navCtrl: NavController, private provider:AbstractItemsProvider) {
    console.log(provider.getLocalidad());
  }
  goToROGallegos(params){
    if (!params) params = {};
    this.navCtrl.push(ROGallegosPage);
  }
}
