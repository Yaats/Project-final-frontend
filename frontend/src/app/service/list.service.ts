import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Movie, Serie} from './movie-tv.service';
import {Event} from './event.service';
import 'rxjs/operator/toPromise';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ListService {
  currentList: List = new List();

  constructor(private userThing: UserService, private billise: HttpClient) {}

  getList() {
    return this.billise
      .get('http://localhost:3000/favorite-event/event/billise')
      .toPromise();
  }

  // getListId(_id) {
  //   return this.billise.get(
  //     `http://localhost:3000/favorite-event/event/billise/${_id}`
  //   );
  // }

  delete(_id) {
    return this.billise
      .delete(
        `http://localhost:3000/favorite-event/event/billise/delete/337167`
      )
      .toPromise();
  }
}

export class List {
  user?: object;
  allItems?: Array<Movie | Event | Serie> = [];
  // currentUserId: number;
  // movieTitle: string;
  // movieRelease_date: string;
  // movieOverview: string;
  // moviePoster_path: string;
}
