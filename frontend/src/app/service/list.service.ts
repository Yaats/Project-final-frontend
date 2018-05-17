import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Movie, Serie} from './movie-tv.service';
import {Event} from './event.service';
import 'rxjs/operator/toPromise';
import {HttpClient} from '@angular/common/http';
// import { environment } from '../../environments/environment.prod';
import {environment} from '../../environments/environment';
import {Book} from './book.service';

@Injectable()
export class ListService {
  currentList: List = new List();

  constructor(public userThing: UserService, private billise: HttpClient) {}

  getList() {
    return this.billise
      .get(`${environment.backUrl}/favorite-event/event/billise`)
      .toPromise();
  }

  delete(itemId) {
    return this.billise
      .delete(
        `${environment.backUrl}/favorite-event/${itemId.category}/billise/${itemId._id}`
      )
      .toPromise();
  }
}

export class List {
  user?: object;
  allItems?: Array<Movie | Event | Serie | Book> = [];
  // currentUserId: number;
  // movieTitle: string;
  // movieRelease_date: string;
  // movieOverview: string;
  // moviePoster_path: string;
}
