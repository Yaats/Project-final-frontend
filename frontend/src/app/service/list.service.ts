import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {Movie} from './movie-tv.service';

@Injectable()
export class ListService {
  currentList: List = new List();

  constructor(private userThing: UserService) {}
}

export class List {
  user?: object;
  allItems?: Array<Movie | Event> = [];
  // currentUserId: number;
  // movieTitle: string;
  // movieRelease_date: string;
  // movieOverview: string;
  // moviePoster_path: string;
}
