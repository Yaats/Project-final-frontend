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
    return this.apiBook.get(`${environment.backUrl}/books`).toPromise();
  }

  getBookReco() {
    return this.apiBook
      .get(`${environment.backUrl}/reco/books`, {withCredentials: true})
      .toPromise();
  }

  getBookDetails(bookId) {
    return this.apiBook
      .get(`${environment.backUrl}/book-detail/${bookId}`)
      .toPromise();
  }

  // Add this book to my list

  addSomething(bookInfo, category) {
    return this.apiBook
      .post(`${environment.backUrl}/favorite-event/${category}`, bookInfo, {
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

export class Book {
  description?: string;
  authors?: Array<string>;
  id?: string;
  title?: string;
  imageLinks?: object;
  categories?: Array<string>;
  thumbnail: string;
  publishedDate?: string;
  averageRating?: number;
  industryIdentifiers?: Array<object>;
}
