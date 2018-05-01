import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the AnalogFilterPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-analog-filter',
  templateUrl: 'analog-filter.html'
})
export class AnalogFilterPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello AnalogFilterPage Page');
  }

}
