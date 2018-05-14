import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserService} from './user.service';

import 'rxjs/operator/toPromise';

@Injectable()
export class EventService {
  constructor(private apiEvent: HttpClient) {}

  getListEvent() {
    return this.apiEvent.get('http://localhost:3000/events').toPromise();
  }

  getEventDetails(eventId) {
    return this.apiEvent
      .get(`http://localhost:3000/event-detail/${eventId}`)
      .toPromise();
  }

  // Add this event to my list

  addSomething(eventInfo, category) {
    console.log('1');
    return this.apiEvent
    .post(`http://localhost:3000/favorite-event/${category}`, eventInfo, {
      withCredentials: true,
    })
      .toPromise()
      .then((apiResponse: any) => {
        console.log('2');
        return apiResponse;

      })
      .catch(err => {
        console.log(err);
        console.log('3');

      });
  }
}

export class Event {
  html: string;
  url: string;
  title: string;
  realDateStart: string;
  nom: string;
  adresse: string;
}
