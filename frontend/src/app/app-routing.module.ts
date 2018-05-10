import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {SearchComponent} from './search/search.component';
import {EventDetailComponent} from './event-detail/event-detail.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search', component: SearchComponent},
  {path: 'movie-detail/:movieId', component: MovieDetailsComponent},
  {path: 'event-detail/:eventId', component: EventDetailComponent},

  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
