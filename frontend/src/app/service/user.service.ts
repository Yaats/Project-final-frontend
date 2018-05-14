import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';

// a faire dans tous les services au moment du passage en prod puis remplacer http://localhost:3000 par `${environment.backUrl}`
// import {environment} from "../../environments/environment"

@Injectable()
export class UserService {
  currentUser: User;

  constructor(private ajaxTruc: HttpClient) {}

  // GET /checklogin

  check() {
    return this.ajaxTruc
      .get('http://localhost:3000/api/checklogin', {withCredentials: true})
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // POST /signup
  postSignup(credsSign: SignupCredentials) {
    return this.ajaxTruc
      .post('http://localhost:3000/api/signup', credsSign, {
        withCredentials: true,
      })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // POST /login

  postLogin(creds: LoginCredentials) {
    return this.ajaxTruc
      .post('http://localhost:3000/api/login', creds, {withCredentials: true})
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }
  // GET /logout

  logout() {
    return this.ajaxTruc
      .get('http://localhost:3000/api/logout', {withCredentials: true})
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  //  EDIT PROFILE
  postEdit(creds: SignupCredentials) {
    return this.ajaxTruc
      .put('http://localhost:3000/api/edit', creds, {
        withCredentials: true,
      })
      .toPromise()
      .then((apiResponse: any) => {
        apiResponse = this.currentUser.interestedIn;
        return apiResponse;
      });
  }
}

export class User {
  myList?: object;
  username: string;
  email: string;
  password: string;
  interestedIn?: string[] = [];
}

export class LoginCredentials {
  email: string;
  password: string;
}

export class SignupCredentials {
  email: string;
  password: string;
  username: string;
  interestedIn: string[] = [];
}
