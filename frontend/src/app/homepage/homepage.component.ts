import {Component, OnInit} from '@angular/core';
import {MovieTvService, Movie, Serie} from '../service/movie-tv.service';
import {EventService, Event} from '../service/event.service';
import {UserService, SignupCredentials} from '../service/user.service';
import {BookService, Book} from '../service/book.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  events: Event[] = [];
  series: Serie[] = [];
  books: Book[] = [];
  moviesReco: Movie[] = [];
  seriesReco: Serie[] = [];
  eventsReco: Event[] = [];
  booksReco: Book[] = [];

  creds: SignupCredentials = new SignupCredentials();

  constructor(
    public apiTruc: MovieTvService,
    public userServ: UserService,
    public apiTrac: EventService,
    public apiTric: BookService
  ) {}

  ngOnInit() {
    this.userServ
      .check()
      .then(() => {
        if (this.userServ.currentUser) {
          this.creds.interestedIn = this.userServ.currentUser.interestedIn;
          this.creds.interestedInEvent = this.userServ.currentUser.interestedInEvent;
          this.creds.interestedInSerie = this.userServ.currentUser.interestedInSerie;
          this.creds.interestedInBook = this.userServ.currentUser.interestedInBook;
          this.getMRecos();
          this.getSRecos();
          this.getERecos();
          this.getBRecos();
        }
        else {
          this.apiTrac
            .getListEvent()
              .then((response: any) => {
                console.log("get ALL list")
                this.events = response.data;
              })
              .catch(err => {
                console.log('pas de db ?? ', err);
              });
        }

      })
      .catch(err => {
        console.log('app login error', err);
      });

    // Display home page movies / seies / events / books

    this.apiTruc
      .getListMovie()
      .then((response: any) => {
        this.movies = response.results;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });

    this.apiTruc
      .getListSerie()
      .then((response: any) => {
        this.series = response.results;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });

    this.apiTric
      .getListBook()
      .then((response: any) => {
        this.books = response;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });
  }

  // Display home page movies filtered / seies filtered / events filtered / books filtered

  getMRecos() {
    this.apiTruc
      .getMovieReco()
      .then((response: any) => {
        this.moviesReco = response.results;
      })
      .catch(err => {
        console.log('marchpo reco M', err);
      });
  }

  getSRecos() {
    this.apiTruc
      .getSerieReco()
      .then((response: any) => {
        this.seriesReco = response.results;
      })
      .catch(err => {
        console.log('marchpo reco S', err);
      });
  }

  getERecos() {
    this.apiTrac
      .getEventReco()
      .then((response: any) => {
        console.log("get RECOS list")
        this.eventsReco = response.data;
      })
      .catch(err => {
        console.log('marchpo reco E', err);
      });
  }

  getBRecos() {
    this.apiTric
      .getBookReco()
      .then((response: any) => {
        this.booksReco = response;
      })
      .catch(err => {
        console.log('marchpo reco B', err);
      });
  }
}
