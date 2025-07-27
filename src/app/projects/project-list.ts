import { ProjectDescription } from './project-description';
import { abizeitungDescription } from './abizeitung';
import { constrainedTDDescription } from './constrained-td';
import { fsarCropex25Description } from './fsar-cropex-25';
import { gediTdxDescription } from './gedi-tdx';
import { insarSoilMoistureDescription } from './insar-soil-moisture';
import { modelBasedTDDescription } from './model-based-td';
import { netGyroBoyDescription } from './net-gyro-boy';
import { polsarAutoencodersDescription } from './polsar-autoencoders';
import { roboyCognitionDescription } from './roboy-cognition';
import { roboyMiddlewareDescription } from './roboy-middleware';
import { spectrumAnalyzerDescription } from './spectrum-analyzer';
import { userlaneDescription } from './userlane';
import { webSphDescription } from './web-sph';
import { webSurfelsDescription } from './web-surfels';

export const ALL_PROJECTS: Array<ProjectDescription> = [
  webSurfelsDescription,
  webSphDescription,
  roboyCognitionDescription,
  roboyMiddlewareDescription,
];

export const TODO_PROJECTS: Array<ProjectDescription> = [
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

export const HIGHLIGHT_PROJECTS: Array<ProjectDescription> = [roboyMiddlewareDescription, webSurfelsDescription];
