import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';

@Injectable()
export class MovieTvService {
  constructor(private apiMovieTv: HttpClient) {
    console.log('hello hello??');
  }

  getListMovie() {
    return this.apiMovieTv.get('http://localhost:3000').toPromise();
  }
}

// class Movie {
//   _id: string;
//   brand: string;
//   name: string;
//   image: string;
//   specs: string[];
//   // ? means it's not required to have one
//   createdAt?: Date;
//   updatedAd?: Date;
// }
