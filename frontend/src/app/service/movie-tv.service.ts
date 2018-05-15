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

  getMovieReco() {
    return this.apiMovieTv.get('http://localhost:3000/reco').toPromise();
  }

  getListSerie() {
    return this.apiMovieTv.get('http://localhost:3000/series').toPromise();
  }

  // Get movies details

  getDetails(movieId) {
    return this.apiMovieTv
      .get(`http://localhost:3000/movie-detail/${movieId}`)
      .toPromise();
  }

  // Get movies details

  getDetailsSerie(serieId) {
    return this.apiMovieTv
      .get(`http://localhost:3000/serie-detail/${serieId}`)
      .toPromise();
  }

  // Add this movie or serie to my list

  addSomething(movieInfo, category) {
    return this.apiMovieTv
      .post(`http://localhost:3000/favorite-event/movie`, movieInfo, {
        withCredentials: true,
      })
      .toPromise()
      .then((apiResponse: any) => {
        return apiResponse;
      })
      .catch(err => {
        console.log(err);
      });
  }

  addSomethingS(serieInfo, category) {
    return this.apiMovieTv
      .post(`http://localhost:3000/favorite-event/tv-show`, serieInfo, {
        withCredentials: true,
      })
      .toPromise()
      .then((apiResponse: any) => {
        return apiResponse;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export class Movie {
  overview?: string;
  vote_count?: number;
  vote_average?: number;
  id?: string;
  title?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  genres?: Array<object>;
  video?: boolean;
  belongs_to_collection?: object;
  runtime: number;
}

export class Serie {
  overview?: string;
  vote_count?: number;
  vote_average?: number;
  id?: string;
  name?: string;
  number_of_seasons?: number;
  popularity?: number;
  poster_path?: string;
  first_air_date?: string;
  episode_run_time?: number;
  number_of_episodes?: number;
  genres?: Array<object>;
  production?: boolean;
}
