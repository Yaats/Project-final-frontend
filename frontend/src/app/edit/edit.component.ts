import {Component, OnInit} from '@angular/core';
import {User, UserService, SignupCredentials} from '../service/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  user: User;
  creds: SignupCredentials = new SignupCredentials();

  constructor(private userServ: UserService, private resTruc: Router) {}

  ngOnInit() {
    this.userServ
      .check()
      .then(() => {
        this.creds.interestedIn = this.userServ.currentUser.interestedIn;
      })
      .catch(err => {
        console.log('app login error', err);
      });
  }

  update() {
    this.userServ
      .postEdit(this.creds)
      .then(result => {
        this.userServ.currentUser.interestedIn = this.creds.interestedIn;
        this.resTruc.navigateByUrl('/');
      })
      .catch(err => {
        console.log(err);
      });
  }
  updateProfile(interest) {
    const index = this.creds.interestedIn.indexOf(interest);
    // console.log(this.userServ.currentUser.interestedIn);
    if (index === -1) {
      this.creds.interestedIn.push(interest);
    } else {
      this.creds.interestedIn.splice(index, 1);
    }
  }
}
