import { Routes } from '@angular/router';
import { GithuntContainer } from 'githunt/containers/githunt.container';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'githunt' },
  { path: 'githunt', loadChildren: 'githunt/githunt.module#GithuntModule' }
];
