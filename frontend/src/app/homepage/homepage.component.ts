import {Component, OnInit} from '@angular/core';
import {MovieTvService, Movie, Serie} from '../service/movie-tv.service';
import {EventService, Event} from '../service/event.service';
import {UserService, SignupCredentials} from '../service/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  movies: Movie[] = [];
  events: Event[] = [];
  series: Serie[] = [];
  moviesReco: Movie[] = [];
  seriesReco: Serie[] = [];
  eventsReco: Event[] = [];

  creds: SignupCredentials = new SignupCredentials();
  constructor(
    public apiTruc: MovieTvService,
    public userServ: UserService,
    public apiTrac: EventService
  ) {}

  ngOnInit() {
    this.userServ
      .check()
      .then(() => {
        this.creds.interestedIn = this.userServ.currentUser.interestedIn;
        this.creds.interestedInEvent = this.userServ.currentUser.interestedInEvent;
        this.creds.interestedInSerie = this.userServ.currentUser.interestedInSerie;
        this.getMRecos();
        this.getSRecos();
        this.getERecos();
      })
      .catch(err => {
        console.log('app login error', err);
      });
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
        // console.log(this.creds.interestedIn[0]);
        this.series = response.results;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });
  }

  getMRecos() {
    this.apiTruc
      .getMovieReco()
      .then((response: any) => {
        this.moviesReco = response.results;
      })
      .catch(err => {
        console.log('marchpo reco', err);
      });
  }

  getSRecos() {
    this.apiTruc
      .getSerieReco()
      .then((response: any) => {
        this.seriesReco = response.results;
      })
      .catch(err => {
        console.log('marchpo reco', err);
      });
  }

  getERecos() {
    this.apiTrac
      .getEventReco()
      .then((response: any) => {
        this.eventsReco = response.data;
      })
      .catch(err => {
        console.log('marchpo reco', err);
      });
  }
}
