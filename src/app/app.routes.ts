import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
   {
    path: 'primer-caso',
    loadComponent: () => import('./primer-caso/primer-caso.page').then( m => m.PrimerCasoPage)
  },
  {
    path: 'segundo-caso',
    loadComponent: () => import('./segundo-caso/segundo-caso.page').then( m => m.SegundoCasoPage)
  },

  {
    path: 'tercer-caso',
    loadComponent: () => import('./tercer-caso/tercer-caso.page').then( m => m.TercerCasoPage)
  },
  {
    path: 'cuarto-caso',
    loadComponent: () => import('./cuarto-caso/cuarto-caso.page').then( m => m.CuartoCasoPage)
  },
  {
    path: 'quinto-caso',
    loadComponent: () => import('./quinto-caso/quinto-caso.page').then( m => m.QuintoCasoPage)
  },
  {
    path: 'sexto-caso',
    loadComponent: () => import('./sexto-caso/sexto-caso.page').then( m => m.SextoCasoPage)
  },
];

