import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';
import {User, SignupCredentials} from './user.service';

@Injectable()
export class EditService {
  currentUser: User;
  creds: SignupCredentials;
  constructor(private ajaxTruc: HttpClient) {}

  postEdit(creds: SignupCredentials) {
    return this.ajaxTruc
      .post('http://localhost:3000/edit', creds, {
        withCredentials: true,
      })
      .toPromise()
      .then((apiResponse: any) => {
        this.currentUser = apiResponse.userInfo;
        return apiResponse;
      });
  }
}
