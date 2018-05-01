import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the McuExptPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mcu-expt',
  templateUrl: 'mcu-expt.html'
})
export class McuExptPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello McuExptPage Page');
  }

}
