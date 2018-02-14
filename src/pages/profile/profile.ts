import { LoginPage } from './../login/login';
import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private media: MediaProvider) { }

  usrId: string;
  userFiles: any;

  ionViewDidLoad() {
    if(localStorage.getItem('usrId') === null) {
      alert('please log in');
      this.navCtrl.push(LoginPage);
    } else {
      this.usrId = localStorage.getItem('usrId');
      this.media.getUserFiles(this.usrId).subscribe( data => {
        this.userFiles = data;
      })
    }
  }

}
