import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ThumbnailPipe } from '../../pipes/thumbnail/thumbnail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private mediaService: MediaProvider) { }

  files: any;

  ionViewDidLoad() {
    if(localStorage.getItem('token') === null) {
      this.navCtrl.push(LoginPage);
    }
    

    this.mediaService.getNewFiles().subscribe( data => {
      this.files = data;
    })
  }

}
