import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileUploader } from 'ng2-file-upload';
/*
  Generated class for the McuExptPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


// const URL = 'http://192.168.31.99:3000/api/';
const URL = 'http://localhost:3000/api/';//本地调试
@Component({
  selector: 'page-mcu-expt',
  templateUrl: 'mcu-expt.html'
})
export class McuExptPage {
    public isShowVedio;
  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello McuExptPage Page');
  }

    public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    }


    toggleShowVedio()
    {
        this.isShowVedio=!this.isShowVedio;
        console.log("isShowVedio"+this.isShowVedio);

    }

}
