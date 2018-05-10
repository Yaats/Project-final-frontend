import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';

@Injectable()
export class MovieTvService {
  constructor(private apiMovieTv: HttpClient) {
    // console.log('hello hello??');
  }

  // get movies total list

  getListMovie() {
    return this.apiMovieTv.get('http://localhost:3000/movies').toPromise();
  }
  // get movies details

  getDetails(movieId) {
    return this.apiMovieTv.get(`http://localhost:3000/${movieId}`).toPromise();
  }
}

export class Movie {
  overview: string;
  vote_count: number;
  id: string;
  title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  // ? means it's not required to have one
  // createdAt?: Date;
  // updatedAd?: Date;
}
