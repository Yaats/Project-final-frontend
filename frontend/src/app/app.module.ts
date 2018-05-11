import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HomepageComponent} from './homepage/homepage.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {UserService} from './service/user.service';
import {MovieTvService} from './service/movie-tv.service';
import {MusicService} from './service/music.service';
import {EventService} from './service/event.service';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ListService} from './service/list.service';
import {SearchComponent} from './search/search.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import { AboutUsComponent } from './about-us/about-us.component';
// import { FilterEventPipePipe } from './pipe-folder/filter-event-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
    MovieDetailsComponent,
    SearchComponent,
    EventDetailComponent,
    AboutUsComponent,
    // FilterEventPipePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    UserService,
    MovieTvService,
    MusicService,
    EventService,
    ListService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
