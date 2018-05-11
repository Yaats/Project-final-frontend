import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService, Event} from '../service/event.service';
import {List, ListService} from '../service/list.service';
import {User, UserService} from '../service/user.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  eventId: string;
  event: Event;
  userList: Array<string>;

  constructor(
    private reqEdetails: ActivatedRoute,
    public apiEdetails: EventService,
    private resEdetails: Router,
    private userService: UserService,
    private listServ: ListService
  ) {}

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

  addListClick() {
    const {nom} = this.event;
    const isOk = confirm(`Are you sure you wanna add ${nom} to your list ? `);
    if (!isOk) {
      return;
    } else {
      this.listServ.currentList.allItems.push(this.event);
      this.apiEdetails
        .addSomething(this.event, 'event')
        .then(result => {})
        .catch(err => {
          console.log(err);
        });
      this.resEdetails.navigateByUrl('/');
    }
  }
}
