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
  creds: SignupCredentials;

  constructor(private userServ: UserService, private resTruc: Router) {
    console.log(userServ.currentUser);
  }

  ngOnInit() {
    this.userServ.check().catch(err => {
      console.log('app login error', err);
    });
  }

  update() {
    this.userServ
      .postEdit(this.creds)
      .then(result => {
        this.resTruc.navigateByUrl('/');
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateProfile(interest) {
    const index = this.userServ.currentUser.interestedIn.indexOf(interest);

    if (index === -1) {
      this.userServ.currentUser.interestedIn.push(interest);
    } else {
      this.userServ.currentUser.interestedIn.splice(index, 1);
    }
  }
}
