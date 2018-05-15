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

  constructor(public dbList: ListService, private userServ: UserService) {}

  ngOnInit() {
    this.dbList.getList().then((response: any) => {
      this.list = response;
      this.userList = response;
      console.log(this.list);
      console.log(this.userList);
    });
  }

  // deleteClick() {
  //   for (var l = 0; l < this.list.length; l++) {
  //     var aList = this.list[l];
  //   }

  //   const isOkay = confirm(
  //     `Are you sure you want to delete ${aList.title} from your list?`
  //   );
  //   if (!isOkay) {
  //     return;
  //   }
  //   this.dbList
  //     .delete(this._id)
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(err => {
  //       console.log('Fav delete error');
  //       console.log(err);
  //     });
  // }
}
