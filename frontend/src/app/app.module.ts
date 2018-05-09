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

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserService, MovieTvService, MusicService, EventService],
  bootstrap: [AppComponent],
})
export class AppModule {}
