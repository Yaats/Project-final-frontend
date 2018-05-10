import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/operator/toPromise";

@Injectable()
export class EventService {
  constructor(private apiEventTv: HttpClient) {
    console.log('hello hello??');
  }

  getListEvent() {
    return this.apiEventTv.get("http://localhost:3000").toPromise();
  }
}

export class Event {
  html: string;
  url: string;
  title: string;
  // vote_count: number;
  // id: number;
  // title: string;
  // popularity: number;
  // poster_path: string;
  // release_date: string;
  // ? means it's not required to have one
  // createdAt?: Date;
  // updatedAd?: Date;
}
