import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home';
import { PageProjectsComponent } from './page-projects/page-projects';
import { AbizeitungComponent } from './projects/abizeitung';
import { ConstrainedTDComponent } from './projects/constrained-td';
import { FsarCropex25Component } from './projects/fsar-cropex-25';
import { GediTdxComponent } from './projects/gedi-tdx';
import { InsarSoilMoistureComponent } from './projects/insar-soil-moisture';
import { NetGyroBoyComponent } from './projects/net-gyro-boy';
import { PhysicalAutoencodersComponent } from './projects/physical-autoencoders';
import { RoboyComponent } from './projects/roboy';
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
    path: 'net-gyro-boy',
    component: NetGyroBoyComponent,
  },
  {
    path: 'physical-autoencoders',
    component: PhysicalAutoencodersComponent,
  },
  {
    path: 'roboy',
    component: RoboyComponent,
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
