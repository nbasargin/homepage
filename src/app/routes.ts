import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home';
import { PageProjectsComponent } from './page-projects/projects-page';
import { PageAboutComponent } from './page-about/page-about';
import { AbizeitungComponent } from './projects/abizeitung';
import { ConstrainedTDComponent } from './projects/constrained-td';
import { FsarCropex25Component } from './projects/fsar-cropex-25';
import { GediTdxComponent } from './projects/gedi-tdx';
import { InsarSoilMoistureComponent } from './projects/insar-soil-moisture';
import { ModelBasedTDComponent } from './projects/model-based-td';
import { NetGyroBoyComponent } from './projects/net-gyro-boy';
import { PhysicalAutoencodersComponent } from './projects/physical-autoencoders';
import { RoboyCognitionComponent } from './projects/roboy-cognition';
import { RoboyMiddlewareComponent } from './projects/roboy-middleware';
import { SpectrumAnalyzerComponent } from './projects/spectrum-analyzer';
import { WebSurfelsComponent } from './projects/web-surfels';
import { UserlaneComponent } from './projects/userlane';
import { WebSphComponent } from './projects/web-sph';

export const routes: Routes = [
  // pages
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
  // project details
  {
    path: 'abizeitung',
    component: AbizeitungComponent,
  },
  {
    path: 'constrained-td',
    component: ConstrainedTDComponent,
  },
  {
    path: 'fsar-cropex-25',
    component: FsarCropex25Component,
  },
  {
    path: 'gedi-tdx',
    component: GediTdxComponent,
  },
  {
    path: 'insar-soil-moisture',
    component: InsarSoilMoistureComponent,
  },
  {
    path: 'model-based-td',
    component: ModelBasedTDComponent,
  },
  {
    path: 'net-gyro-boy',
    component: NetGyroBoyComponent,
  },
  {
    path: 'physical-autoencoders',
    component: PhysicalAutoencodersComponent,
  },
  {
    path: 'roboy-cognition',
    component: RoboyCognitionComponent,
  },
  {
    path: 'roboy-middleware',
    component: RoboyMiddlewareComponent,
  },
  {
    path: 'spectrum-analyzer',
    component: SpectrumAnalyzerComponent,
  },
  {
    path: 'userlane',
    component: UserlaneComponent,
  },
  {
    path: 'web-sph',
    component: WebSphComponent,
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
