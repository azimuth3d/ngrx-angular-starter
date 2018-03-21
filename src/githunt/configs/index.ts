import { Routes } from '@angular/router';
import { GithuntContainer } from '../containers/githunt.container';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: GithuntContainer
  }
];
