import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/operator/toPromise';
import {UserService} from './user.service';
import {environment} from '../../environments/environment';
// import { environment } from '../../environments/environment.prod';

@Injectable()
export class BookService {
  constructor(private apiBook: HttpClient, public UserServ: UserService) {}

  getListBook() {
    return this.apiBook.get(`http://localhost3000/books`).toPromise();
  }

  getBookReco() {}
}

export class Book {
  description?: string;
  authors?: Array<string>;
  id?: string;
  title?: string;
  imageLinks?: object;
  categories?: string;
  publishedDate?: string;
  averageRating?: number;
}
