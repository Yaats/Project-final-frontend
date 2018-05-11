import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchMovie: string;
  searchEvent: Array<string> = [];
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
  updateEvent(event) {
    const index = this.searchEvent.indexOf(event);
    console.log(index);
    if (index === -1) {
      this.searchEvent.push(event);
    } else {
      this.searchEvent.splice(index, 1);
    }
  }
  compare(searchEvent) {}

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
