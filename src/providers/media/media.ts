import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from 'ionic-angular/navigation/nav-controller';

/*
  Generated class for the MediaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MediaProvider {

  constructor(private http: HttpClient) { }

  apiUrl = 'http://media.mw.metropolia.fi/wbma';
  loginUrl = '/login';
  registerUrl = '/users';
  mediaUrl = '/media';
  userUrl = '/user';

  /*
  username: string;
  password: string;
  fullName: string;
  email: string;
  */

  accessToken: string;

  private formValidation(username, password, email): boolean {
    if (!username) {
      alert('Please check that all required fields have content');
      return false;
    } else if (!password) {
      alert('Please check that all required fields have content');
      return false;
    } else if (!email) {
      alert('Please check that all required fields have content');
      return false;
    } else {
      return true;
    }
  };

  public register(username, password, fullName, email) {
    if (this.formValidation(username, password, email)) {
      console.log('username: ' + username);
      console.log('pass: ' + password);
      console.log('full name: ' + fullName);
      console.log('email: ' + email);

      const body = {
        username: username,
        password: password,
        email: email,
        full_name: fullName
      };

      return this.http.post(this.apiUrl + this.registerUrl, body);
    }
  };

  public login(username, password) {
    console.log('username: ' + username);
    console.log('pass: ' + password);

    const body = {
      username: username,
      password: password
    };

    return this.http.post(this.apiUrl + this.loginUrl, body)
  };

  uploadFile(file: FormData) {
    console.log(file);

    const body = {
      headers: new HttpHeaders({
        'x-access-token': localStorage.getItem('token')
      })
    };

    this.http.post(this.apiUrl + this.mediaUrl, file, body).subscribe( data => {
      console.log(data);
      alert('thanks for uploading!');
    }, (errorMsg: HttpErrorResponse) => {
      console.log(errorMsg);
    })
  }

  getMedia() {
    return this.http.get(this.apiUrl + this.mediaUrl + '?limit=999')
  }

  getNewFiles() {
    return this.http.get(this.apiUrl + this.mediaUrl + '?limit=10')
  }

  getUserFiles(id) {
    return this.http.get(this.apiUrl + this.mediaUrl + this.userUrl + '/' + id);
  }
}
