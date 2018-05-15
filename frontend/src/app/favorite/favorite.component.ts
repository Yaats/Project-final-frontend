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
  userList: Array<string> = [];
  _id: string;
  item: any;

  constructor(public dbList: ListService, public userServ: UserService) {}

  ngOnInit() {
    this.dbList.getList().then((response: any) => {
      this.list = response;
    });
  }

  deleteClick(oneList) {
    const isOkay = confirm(
      'Are you sure you want to delete it from your list?'
    );
    if (!isOkay) {
      return;
    }
    this.dbList.delete(oneList).then(result => {}).catch(err => {
      console.log('Fav delete error');
      console.log(err);
    });
  }
}
