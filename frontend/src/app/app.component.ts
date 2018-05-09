import {Component} from '@angular/core';
import {UserService} from './service/user.service';
import {MovieTvService} from './service/movie-tv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  constructor(
    public userTruc: UserService,
    public movieTvTruc: MovieTvService
  ) {}

  ngOnInit() {
    this.userTruc.check().catch(err => {
      console.log('app login error', err);
    });
  }
  logoutClick() {
    this.userTruc.logout().catch(err => {
      console.log(err);
    });
  }
}
