import { LoginPage } from './../login/login';
import { UploadPage } from './../upload/upload';
import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  login = LoginPage;
  register = RegisterPage;
  profile = ProfilePage;
  upload = UploadPage;

  constructor() {

  }
}
