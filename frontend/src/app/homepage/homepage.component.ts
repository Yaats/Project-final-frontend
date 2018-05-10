import {Component, OnInit} from '@angular/core';
import {MovieTvService, Movie} from '../service/movie-tv.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];

  constructor(public apiTruc: MovieTvService) {}

  ngOnInit() {
    this.apiTruc
      .getListMovie()
      .then((response: any) => {
        // for (let i = 0; i < total_pages; i++) {
        this.movies = response.results;
        // }
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });
  }
}
