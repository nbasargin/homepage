import { Routes } from '@angular/router';
import { HighlightsPageComponent } from '../../highlights/highlights-page/highlights-page.component';
import { ProjectsPageComponent } from '../../projects/projects-page/projects-page.component';
import { AboutPageComponent } from '../../about/about-page/about-page.component';
import { DetailsPageComponent } from '../../details/details-page/details-page.component';
import { detailsRoutes } from '../../details/details.routes';

export const routes: Routes = [
  {
    path: 'highlights',
    component: HighlightsPageComponent,
  },
  {
    path: 'projects',
    component: ProjectsPageComponent,
  },
  {
    path: 'details',
    component: DetailsPageComponent,
    children: detailsRoutes,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: '**',
    redirectTo: 'highlights',
  },
];
