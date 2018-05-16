import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';
// import { environment } from '../../environments/environment.prod';
import {environment} from '../../environments/environment';

// a faire dans tous les services au moment du passage en prod puis remplacer ${environment.backUrl} par `${environment.backUrl}`
// import {environment} from "../../environments/environment"

@Injectable()
export class UserService {
  currentUser: User;

  constructor(private ajaxTruc: HttpClient) {}

  // GET /checklogin

  check() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/checklogin`, {withCredentials: true})
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  // POST /signup
  postSignup(credsSign: SignupCredentials) {
    return this.ajaxTruc
      .post(`${environment.backUrl}/api/signup`, credsSign, {
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
      .post(`${environment.backUrl}/api/login`, creds, {withCredentials: true})
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }
  // GET /logout

  logout() {
    return this.ajaxTruc
      .get(`${environment.backUrl}/api/logout`, {withCredentials: true})
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }

  //  EDIT PROFILE
  postEdit(creds: SignupCredentials) {
    return this.ajaxTruc
      .put(`${environment.backUrl}/api/edit`, creds, {
        withCredentials: true,
      })
      .toPromise()
      .then((apiResponse: any) => {
        apiResponse =
          this.currentUser.interestedIn ||
          this.currentUser.interestedInEvent ||
          console.log(this.currentUser.interestedInEvent);
        this.currentUser.interestedInSerie;
        return apiResponse;
      });
  }
}

export class User {
  _id?: string;
  myList?: object;
  username: string;
  email: string;
  password: string;
  interestedIn?: number[] = [];
  interestedInSerie?: number[] = [];
  interestedInEvent?: number[] = [];
  interestedInBook?: string[] = [];
}

export class LoginCredentials {
  email: string;
  password: string;
}

export class SignupCredentials {
  email: string;
  password: string;
  username: string;
  interestedIn: number[] = [];
  interestedInSerie?: number[] = [];
  interestedInEvent?: number[] = [];
  interestedInBook?: string[] = [];
}
