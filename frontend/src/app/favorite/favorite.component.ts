import {Component, OnInit} from '@angular/core';
import {List, ListService} from '../service/list.service';
import {Event} from '../service/event.service';
import {Movie, Serie} from '../service/movie-tv.service';
import {User, UserService, SignupCredentials} from '../service/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  list: Array<Movie | Event | Serie> = [];
  user: User;
  creds: SignupCredentials = new SignupCredentials();

  constructor(public dbList: ListService, private userServ: UserService) {}

  ngOnInit() {
    this.userServ.check().then(() => {}).catch(err => {
      console.log('app login error', err);
    });
    this.dbList.getList().then((response: any) => {
      console.log('voici la dblist', response);
      this.list = response;
    });
  }
}
