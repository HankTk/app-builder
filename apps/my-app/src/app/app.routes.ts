import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'nrwl',
    loadComponent: () => import('./pages/nrwl/nrwl.component').then(m => m.NxWelcomeComponent)
  }
]
