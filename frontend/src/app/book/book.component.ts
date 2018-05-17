import {Component, OnInit} from '@angular/core';
import {BookService, Book} from '../service/book.service';
import {UserService, User} from '../service/user.service';
import {ListService, List} from '../service/list.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  bookId: string ;
  book: Book;
  userList: Array<string>;

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
        this.bookId = result;
        console.log(this.bookId);
      })
      .catch(err => {
        console.log('lesbooks détails ne marchent pas', err);
      });
  }

  addListClick() {
    const {title} = this.book;
    const isOk = confirm(`Are you sure you wanna add ${title} to your list ? `);
    if (!isOk) {
      return;
    } else {
      this.listServ.currentList.allItems.push(this.book);
      this.apiBdetails
        .addSomething(this.book, 'book')
        .then(result => {})
        .catch(err => {
          console.log(err);
        });
      this.resBdetails.navigateByUrl('/');
    }
  }
}
