import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ROGallegosPage } from '../r-ogallegos/r-ogallegos';

@Component({
  selector: 'page-r-ogallegos',
  templateUrl: 'r-ogallegos.html'
})
export class ROGallegosPage {

  constructor(public navCtrl: NavController) {
  }
  goToROGallegos(params){
    if (!params) params = {};
    this.navCtrl.push(ROGallegosPage);
  }
}
