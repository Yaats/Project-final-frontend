import {Component, OnInit} from '@angular/core';
import {BookService} from '../service/book.service';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  constructor(public userServ: UserService) {}

  ngOnInit() {}
}
