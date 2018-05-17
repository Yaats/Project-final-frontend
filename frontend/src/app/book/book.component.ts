import {Component, OnInit} from '@angular/core';
import {BookService, Book} from '../service/book.service';
import {UserService} from '../service/user.service';
import {ListService} from '../service/list.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookId: any = [];
  book: Book;
  title: string;

  constructor(
    public userServ: UserService,
    public listServ: ListService,
    private resBdetails: Router,
    private reqBdetails: ActivatedRoute,
    public apiBdetails: BookService
  ) {}

  ngOnInit() {
    this.reqBdetails.paramMap.subscribe(myParams => {
      this.bookId = myParams.get('bookId');
      this.fetchBookData();
    });
  }

  fetchBookData() {
    this.apiBdetails
      .getBookDetails(this.bookId)
      .then((result: any) => {
        this.bookId = result[0];
        // console.log(this.bookId);
      })
      .catch(err => {
        console.log('lesbooks détails ne marchent pas', err);
      });
  }

  addListClick() {
    console.log('je suis là', this.bookId);

    const isOk = confirm(`Are you sure you wanna add this to your list ? `);
    if (!isOk) {
      return;
    } else {
      this.listServ.currentList.allItems.push(this.bookId);
      this.apiBdetails
        .addSomething(this.bookId, 'book')
        .then(result => {})
        .catch(err => {
          console.log(err);
        });
      this.resBdetails.navigateByUrl('/');
    }
  }
}
