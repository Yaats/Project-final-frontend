import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserService} from './user.service';

import 'rxjs/operator/toPromise';
// import { environment } from '../../environments/environment.prod';
import { environment } from '../../environments/environment';


@Injectable()
export class EventService {
  constructor(private apiEvent: HttpClient) {}

  getListEvent() {
    return this.apiEvent.get(`${environment.backUrl}/events`).toPromise();
  }

  getEventDetails(eventId) {
    return this.apiEvent
      .get(`${environment.backUrl}/event-detail/${eventId}`)
      .toPromise();
  }

  // Add this event to my list

  addSomething(eventInfo, category) {
    return this.apiEvent
      .post(`${environment.backUrl}/favorite-event/${category}`, eventInfo, {
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

export class Event {
  html: string;
  url: string;
  title: string;
  realDateStart: string;
  nom: string;
  adresse: string;
  dateStartEvenement: string;
  small_description: string;
}
