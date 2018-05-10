import {Injectable} from '@angular/core';
import {UserService} from './user.service';

@Injectable()
export class ListService {
  currentList: List;

  constructor(private userThing: UserService) {}
}

export class List {
  user?: object;
  allItems?: string[] = [];
}
