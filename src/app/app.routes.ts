import { Routes } from '@angular/router';
import {AuthComponent} from "./core/auth/auth.component";
import {AppComponent} from "./app.component";
import {ProfileComponent} from "./core/profile/profile.component";
import {HomeComponent} from "./core/home/home.component";
import {AnimeComponent} from "./core/anime/anime.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: "auth",
    component: AuthComponent,
    title: 'Sign Up/Log In'
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    title: 'Profile'
  },
  {
    path: 'anime/:id',
    component: AnimeComponent,
    title: ':Name:'
  }
];
