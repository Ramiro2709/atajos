import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ROGallegosPage } from '../r-ogallegos/r-ogallegos';
import { MunicipiosPage } from '../municipios/municipios';
import { ComisionesDeFomentosPage } from '../comisiones-de-fomentos/comisiones-de-fomentos';
import { ParajesPage } from '../parajes/parajes';
import { UrgenciasPage } from '../urgencias/urgencias';

import {AbstractItemsProvider} from '../../providers/abstract-items/abstract-items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //prueba : string;
  //AbstractItemsProvider:AbstractItemsProvider;
  localidad : number;
  constructor(public navCtrl: NavController, private provider:AbstractItemsProvider) {
    //this.prueba = AbstractItemsProvider.getUserName();
    //console.log(this.prueba);
  }

  goToROGallegos(params){
    //this.localidad = this.AbstractItemsProvider.setLocalidad();
    this.provider.setLocalidad(29);

    if (!params) params = {};
    this.navCtrl.push(ROGallegosPage);
  }
  
  goToMunicipios(params){
    if (!params) params = {};
    this.navCtrl.push(MunicipiosPage);
  }goToComisionesDeFomentos(params){
    if (!params) params = {};
    this.navCtrl.push(ComisionesDeFomentosPage);
  }goToParajes(params){
    if (!params) params = {};
    this.navCtrl.push(ParajesPage);
  }goToUrgencias(params){
    if (!params) params = {};
    this.navCtrl.push(UrgenciasPage);
  }
}
