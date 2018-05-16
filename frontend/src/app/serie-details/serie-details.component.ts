import {Component, OnInit} from '@angular/core';
import {Serie, MovieTvService} from '../service/movie-tv.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User, UserService} from '../service/user.service';
import {ListService} from '../service/list.service';

@Component({
  selector: 'app-serie-details',
  templateUrl: './serie-details.component.html',
  styleUrls: ['./serie-details.component.css'],
})
export class SerieDetailsComponent implements OnInit {
  serieId: string;
  serie: Serie;
  userList: Array<string>;
  constructor(
    private reqSdetails: ActivatedRoute,
    private resSdetails: Router,
    public userService: UserService,
    public listServ: ListService,
    public apiSdetails: MovieTvService
  ) {}

  ngOnInit() {
    this.reqSdetails.paramMap.subscribe(myParams => {
      this.serieId = myParams.get('serieId');
      this.fetchSerieData();
    });
  }

  fetchSerieData() {
    this.apiSdetails
      .getDetailsSerie(this.serieId)
      .then((result: any) => {
        this.serie = result;
      })
      .catch(err => {
        console.log(err);
      });
  }

  addListClickS() {
    const {name} = this.serie;
    const isOk = confirm(`Are you sure you wanna add ${name} to your list ? `);
    if (!isOk) {
      return;
    } else {
      this.listServ.currentList.allItems.push(this.serie);
      this.apiSdetails
        .addSomethingS(this.serie, 'tv-show')
        .then(result => {})
        .catch(err => {
          console.log(err);
        });
      this.resSdetails.navigateByUrl('');
    }
  }
}
