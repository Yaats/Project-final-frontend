import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';
import {User, UserService} from './user.service';

@Injectable()
export class MovieTvService {
  constructor(private apiMovieTv: HttpClient, private userThing: UserService) {}

  getListMovie() {
    return this.apiMovieTv.get('http://localhost:3000/movies').toPromise();
  }

  // Get movies details

  getDetails(movieId) {
    return this.apiMovieTv
      .get(`http://localhost:3000/movie-detail/${movieId}`)
      .toPromise();
  }

  // Add this movie to my list

  add(movieId) {
    console.log(movieId);
    return this.apiMovieTv
      .get(`http://localhost:3000/movie-detail/${movieId}`)
      .toPromise();
  }
}

export class Movie {
  overview: string;
  vote_count: number;
  vote_average: number;
  id: string;
  title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  // ? means it's not required to have one
  // createdAt?: Date;
  // updatedAd?: Date;
}
