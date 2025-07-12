import { ProjectDescription } from './project-description';
import { abizeitungDescription } from './abizeitung/abizeitung.description';
import { roboyDescription } from './roboy/roboy.description';
import { webSurfelsDescription } from './web-surfels/web-surfels.description';

export const ALL_PROJECTS: Array<ProjectDescription> = [abizeitungDescription, roboyDescription, webSurfelsDescription];

export const HIGHLIGHT_PROJECTS: Array<ProjectDescription> = [roboyDescription, webSurfelsDescription];
