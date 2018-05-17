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
        this.creds.interestedInEvent = this.userServ.currentUser.interestedInEvent;
        this.creds.interestedInSerie = this.userServ.currentUser.interestedInSerie;
        this.creds.interestedInBook = this.userServ.currentUser.interestedInBook;
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
    if (index === -1) {
      this.creds.interestedIn.push(interest);
    } else {
      this.creds.interestedIn.splice(index, 1);
    }
  }

  updateProfileSerie(interest) {
    const index = this.creds.interestedInSerie.indexOf(interest);
    console.log(this.userServ.currentUser.interestedInSerie);
    if (index === -1) {
      this.creds.interestedInSerie.push(interest);
    } else {
      this.creds.interestedInSerie.splice(index, 1);
    }
  }

  updateProfileEvent(interest) {
    const index = this.creds.interestedInEvent.indexOf(interest);
    // console.log(this.userServ.currentUser.interestedIn);
    if (index === -1) {
      this.creds.interestedInEvent.push(interest);
    } else {
      this.creds.interestedInEvent.splice(index, 1);
    }
  }

  updateProfileBook(interest) {
    const index = this.creds.interestedInBook.indexOf(interest);
    // console.log(this.userServ.currentUser.interestedIn);
    if (index === -1) {
      this.creds.interestedInBook.push(interest);
    } else {
      this.creds.interestedInBook.splice(index, 1);
    }
  }
}
