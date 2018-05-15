import {Component, OnInit} from '@angular/core';
import {SignupCredentials, UserService} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  formCreds: SignupCredentials = new SignupCredentials();

  constructor(public userTruc: UserService, private resTruc: Router) {}

  ngOnInit() {}

  signinSubmit() {
    this.userTruc
      .postSignup(this.formCreds)
      .then(result => {
        this.resTruc.navigateByUrl('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateInterests(interest) {
    const index = this.formCreds.interestedIn.indexOf(interest);

    if (index === -1) {
      this.formCreds.interestedIn.push(interest);
    } else {
      this.formCreds.interestedIn.splice(index, 1);
    }
  }

  updateInterestsSerie(interest) {
    const index = this.formCreds.interestedInSerie.indexOf(interest);

    if (index === -1) {
      this.formCreds.interestedInSerie.push(interest);
    } else {
      this.formCreds.interestedInSerie.splice(index, 1);
    }
  }

  updateInterestsEvent(interest) {
    const index = this.formCreds.interestedInEvent.indexOf(interest);

    if (index === -1) {
      this.formCreds.interestedInEvent.push(interest);
    } else {
      this.formCreds.interestedInEvent.splice(index, 1);
    }
  }
}
