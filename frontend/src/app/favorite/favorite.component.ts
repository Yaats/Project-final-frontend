import {Component, OnInit} from '@angular/core';
import {List, ListService} from '../service/list.service';
import { Event } from '../service/event.service';
import { Movie, Serie } from '../service/movie-tv.service';
import { User, UserService } from '../service/user.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  list: Array<Movie | Event | Serie> = [];
  user: User;

  constructor(public dbList: ListService, private userServ: UserService) {}

  ngOnInit() {

  }
}