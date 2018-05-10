import {Component, OnInit} from '@angular/core';
import {MovieTvService, Movie} from '../service/movie-tv.service';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  events: Event[] = [];

  constructor(public apiTruc: MovieTvService, public apiTrac: EventService) {}

  ngOnInit() {
    this.apiTruc
      .getListMovie()
      .then((response: any) => {
        const page = response.total_pages;
        for (let i = 0; i < page; i++) {
          this.movies = response.results;
        }
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });


    this.apiTrac
    .getListEvent()
    .then((response: any) => {
      this.events = response.data;
      console.log(response.data);
    })
    .catch(err => {
      console.log('pas de db ?? ', err);
    });
  }
}
