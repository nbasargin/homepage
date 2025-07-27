import { ProjectDescription } from './projects/project-description';
import { abizeitungDescription } from './projects/abizeitung';
import { constrainedTDDescription } from './projects/constrained-td';
import { fsarCropex25Description } from './projects/fsar-cropex-25';
import { gediTdxDescription } from './projects/gedi-tdx';
import { insarSoilMoistureDescription } from './projects/insar-soil-moisture';
import { modelBasedTDDescription } from './projects/model-based-td';
import { netGyroBoyDescription } from './projects/net-gyro-boy';
import { polsarAutoencodersDescription } from './projects/polsar-autoencoders';
import { roboyCognitionDescription } from './projects/roboy-cognition';
import { roboyMiddlewareDescription } from './projects/roboy-middleware';
import { spectrumAnalyzerDescription } from './projects/spectrum-analyzer';
import { userlaneDescription } from './projects/userlane';
import { webSphDescription } from './projects/web-sph';
import { webSurfelsDescription } from './projects/web-surfels';

export const ALL_PROJECTS: Array<ProjectDescription> = [webSurfelsDescription];

export const TODO_PROJECTS: Array<ProjectDescription> = [
  webSphDescription,
  roboyCognitionDescription,
  roboyMiddlewareDescription,
  abizeitungDescription,
  constrainedTDDescription,
  fsarCropex25Description,
  gediTdxDescription,
  insarSoilMoistureDescription,
  modelBasedTDDescription,
  netGyroBoyDescription,
  polsarAutoencodersDescription,
  spectrumAnalyzerDescription,
  userlaneDescription,
];

export const HIGHLIGHT_PROJECTS: Array<ProjectDescription> = [webSurfelsDescription];
