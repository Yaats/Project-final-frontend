import {Component, OnInit} from '@angular/core';
import {MovieTvService, Movie, Serie} from '../service/movie-tv.service';
import {EventService, Event} from '../service/event.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  events: Event[] = [];
  series: Serie[] = [];

  constructor(public apiTruc: MovieTvService, public apiTrac: EventService) {}

  ngOnInit() {
    this.apiTruc
      .getListMovie()
      .then((response: any) => {
        this.movies = response.results;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });

    this.apiTrac
      .getListEvent()
      .then((response: any) => {
        this.events = response.data;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });

    this.apiTruc
      .getListSerie()
      .then((response: any) => {
        console.log(response.results);
        this.series = response.results;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });
  }
}
