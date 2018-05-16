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
        this.series = response.results;
      })
      .catch(err => {
        console.log('pas de db ?? ', err);
      });

    this.apiTruc
      .getMovieReco(this.creds.interestedIn[0])
      .then((response: any) => {
        this.moviesReco = response.results;
      })
      .catch(err => {
        console.log('marchpo reco', err);
      });
  }
}
