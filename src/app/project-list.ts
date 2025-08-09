import { ProjectDescription } from './projects/project-description';
import { abizeitungDescription } from './projects/abizeitung';
import { constrainedTDDescription } from './projects/constrained-td';
import { fsarCropex25Description } from './projects/fsar-cropex-25';
import { gediTdxDescription } from './projects/gedi-tdx';
import { insarSoilMoistureDescription } from './projects/insar-soil-moisture';
import { netGyroBoyDescription } from './projects/net-gyro-boy';
import { physicalAutoencodersDescription } from './projects/physical-autoencoders';
import { roboyDescription } from './projects/roboy';
import { spectrumAnalyzerDescription } from './projects/spectrum-analyzer';
import { userlaneDescription } from './projects/userlane';
import { webSphDescription } from './projects/web-sph';
import { webSurfelsDescription } from './projects/web-surfels';

export const HIGHLIGHT_PROJECTS: Array<ProjectDescription> = [
  physicalAutoencodersDescription,
  webSurfelsDescription,
  constrainedTDDescription,
  roboyDescription,
];

export const ALL_PROJECTS: Array<ProjectDescription> = [
  physicalAutoencodersDescription,
  webSurfelsDescription,
  constrainedTDDescription,
  roboyDescription,
  fsarCropex25Description,
  gediTdxDescription,
  webSphDescription,
  abizeitungDescription,
  //insarSoilMoistureDescription,
  //netGyroBoyDescription,
  //spectrumAnalyzerDescription,
  //userlaneDescription,
];
