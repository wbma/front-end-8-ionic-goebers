import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MediaProvider } from '../../providers/media/media';

import { HttpErrorResponse } from '@angular/common/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public media: MediaProvider) {
  }

  username: string;
  password: string;

  accessToken: string;
  usrId: string;

  ionViewDidLoad() {
    if(localStorage.getItem('token') === null) {
      // if browser local storage doesn't have the access token
    } else {
      this.navCtrl.push(HomePage);
    }
  }

  logins() {
    this.media.login(this.username, this.password).subscribe( data => {
      console.log(data);
      this.accessToken = data['token'];

      this.usrId = data['user'].user_id;

      localStorage.token = this.accessToken;

      localStorage.usrId = this.usrId;

      console.log('local storage: ' + localStorage.token);

      this.navCtrl.push(HomePage);
    }, (errorMsg: HttpErrorResponse) => {
      console.log(errorMsg);
    })
  }

}
