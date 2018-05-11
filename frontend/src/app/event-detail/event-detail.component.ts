import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService, Event } from '../service/event.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  eventId: string;
  event: Event;

  constructor(
    private reqEdetails: ActivatedRoute,
    public apiEdetails: EventService,
    private resEdetails: Router
  ) { }

  ngOnInit() {
    this.reqEdetails.paramMap.subscribe(myParams => {
      this.eventId = myParams.get('eventId');

      this.fetchEventData();
    });
  }

  fetchEventData() {
    this.apiEdetails
    .getEventDetails(this.eventId)
    .then((result: any) => {
      this.event = result.data[0];
      console.log(this.event);
    })
    .catch(err => {
      console.log('Event details does not work', err);
    });
  }
}
