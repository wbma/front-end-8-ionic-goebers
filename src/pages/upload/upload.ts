import { LoginPage } from './../login/login';
import { MediaProvider } from './../../providers/media/media';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private media: MediaProvider) {
  }

  ionViewDidLoad() {
    if(localStorage.getItem('token') === null) {
      this.navCtrl.push(LoginPage);
    }
  }

  file: File;
  title: string;
  description: string;
  formData: FormData = new FormData();

  setFile() {
    if(!this.file || !this.title) { // if file or title are empty dont do nothing
      alert('Please fill all neccessary fields!');
    } else {
      this.formData.append("file", this.file); // file
      this.formData.append("title", this.title); // title
      this.formData.append("description", this.description); // desc.
      this.media.uploadFile(this.formData);
    }
  }

  // fileInfo for debugging
  fileInfo(event) {
    console.log(event);
    console.log('filename: ' + event.target.files[0].name);
    console.log('file type: ' + event.target.files[0].type);
    console.log('file size: ' + event.target.files[0].size);
    this.file = event.target.files[0];
  }

}
