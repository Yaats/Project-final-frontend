import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/operator/toPromise";

@Injectable()
export class EventService {
  constructor(private apiEvent: HttpClient) {
  }

  getListEvent() {
    console.log('lourd')
    return this.apiEvent.get("http://localhost:3000/events").toPromise();
  }

  getEventDetails(eventId) {
    return this.apiEvent
      .get(`http://localhost:3000/event-detail/${eventId}`)
      .toPromise();
  }
}

export class Event {
  html: string;
  url: string;
  title: string;
  realDateStart: string;
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
