import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageProjectsComponent } from './page-projects/projects-page.component';
import { PageAboutComponent } from './page-about/page-about.component';
import { WebSurfelsComponent } from './details-web-surfels/web-surfels.component';

export const routes: Routes = [
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'projects',
    component: PageProjectsComponent,
  },
  {
    path: 'about',
    component: PageAboutComponent,
  },
  {
    path: 'web-surfels',
    component: WebSurfelsComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
