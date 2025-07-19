import { ProjectDescription } from './project-description';
import { abizeitungDescription } from './abizeitung/abizeitung.description';
import { constrainedTDDescription } from './constrained-td/constrained-td.description';
import { fsarCropex25Description } from './fsar-cropex-25/fsar-cropex-25.description';
import { gediTdxDescription } from './gedi-tdx/gedi-tdx.description';
import { insarSoilMoistureDescription } from './insar-soil-moisture/insar-soil-moisture.description';
import { modelBasedTDDescription } from './model-based-td/model-based-td.description';
import { netGyroBoyDescription } from './net-gyro-boy/net-gyro-boy.description';
import { polsarAutoencodersDescription } from './polsar-autoencoders/polsar-autoencoders.description';
import { roboyCognitionDescription } from './roboy-cognition/roboy-cognition.description';
import { roboyMiddlewareDescription } from './roboy-middleware/roboy-middleware.description';
import { userlaneDescription } from './userlane/userlane.description';
import { webSphDescription } from './web-sph/web-sph.description';
import { webSurfelsDescription } from './web-surfels/web-surfels.description';

export const ALL_PROJECTS: Array<ProjectDescription> = [
  abizeitungDescription,
  constrainedTDDescription,
  fsarCropex25Description,
  gediTdxDescription,
  insarSoilMoistureDescription,
  modelBasedTDDescription,
  netGyroBoyDescription,
  polsarAutoencodersDescription,
  roboyCognitionDescription,
  roboyMiddlewareDescription,
  userlaneDescription,
  webSphDescription,
  webSurfelsDescription,
];

export const HIGHLIGHT_PROJECTS: Array<ProjectDescription> = [roboyMiddlewareDescription, webSurfelsDescription];
