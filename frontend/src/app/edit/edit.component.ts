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

  constructor(private userServ: UserService, private resTruc: Router) {}

  ngOnInit() {
    this.userServ.check().catch(err => {
      console.log('app login error', err);
    });
  }

  update() {
    this.userServ
      .postEdit(this.creds)
      .then(result => {
        console.log(result);

        console.log('ca amrche ???');
        this.resTruc.navigateByUrl('/');
      })
      .catch(err => {
        console.log('ca marche pao', err);
      });
  }
  updateProfile(interest) {
    const index = this.userServ.currentUser.interestedIn.indexOf(interest);
    // console.log(this.userServ.currentUser.interestedIn);
    if (index === -1) {
      this.userServ.currentUser.interestedIn.push(interest);
    } else {
      this.userServ.currentUser.interestedIn.splice(index, 1);
    }
  }
}
