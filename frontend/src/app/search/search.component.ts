import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchMovie: string;
  searchEvent: Array<string>;
  searchSerie: string;

  searchFormEvent: boolean = false;
  searchFormMovie: boolean = false;
  searchFormSerie: boolean = false;

  constructor() {}

  ngOnInit() {}

  // Search event and form
  openFormEvent() {
    this.searchFormEvent = !this.searchFormEvent;
  }
  searchTermEvent() {
    searchEvent[i].push();
  }

  // Search movie and form
  openFormMovie() {
    this.searchFormMovie = !this.searchFormMovie;
  }
  searchTermMovie() {}

  // Search Serie and form
  openFormSerie() {
    this.searchFormSerie = !this.searchFormSerie;
  }
  searchTermSerie() {}
}
