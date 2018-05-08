import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/operator/toPromise';

@Injectable()
export class MovieTvService {

  constructor(
    private apiMovieTv: HttpClient
  ) { }

  getListMovie() {
    return this.apiMovieTv.get('http://localhost:3000').toPromise();
  }

}
