import { Routes } from '@angular/router';
import { WebSurfelsComponent } from './web-surfels/web-surfels.component';

export const detailsRoutes: Routes = [
  {
    path: 'web-surfels',
    component: WebSurfelsComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
