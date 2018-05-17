import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {SearchComponent} from './search/search.component';
import {EventDetailComponent} from './event-detail/event-detail.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {SerieDetailsComponent} from './serie-details/serie-details.component';
import {EditComponent} from './edit/edit.component';
import {FavoriteComponent} from './favorite/favorite.component';
import {BookComponent} from './book/book.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search', component: SearchComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'edit', component: EditComponent},
  {path: 'favorite', component: FavoriteComponent},
  {path: 'movie-detail/:movieId', component: MovieDetailsComponent},
  {path: 'book-detail/:bookId', component: BookComponent},
  {path: 'event-detail/:eventId', component: EventDetailComponent},
  {path: 'serie-detail/:serieId', component: SerieDetailsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
