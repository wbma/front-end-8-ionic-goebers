import { HomePage } from './../home/home';
import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public media: MediaProvider) {
  }

  username: string;
  password: string;
  fullName: string;
  email: string;

  ionViewDidLoad() {
  }

  register() {
    this.media.register(this.username, this.password, this.fullName, this.email).subscribe( data => {
      console.log(data);
      
      this.media.login(this.username, this.password);
      this.navCtrl.push(HomePage);
    });
  }
}
