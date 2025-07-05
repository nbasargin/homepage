export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  detailsLink?: string;
}

export const PROJECTS: Array<ProjectData> = [
  {
    title: 'WebSurfels',
    subtitle: 'Point cloud rendering',
    description: "Master's thesis project",
    imageUrl: '/assets/stable-diffusion-iceland.jpg',
    detailsLink: '/web-surfels',
  },
  {
    title: 'Abizeitung',
    subtitle: 'School yearbook',
    description: 'School yearbook design',
    imageUrl: '/assets/stable-diffusion-forest-shrooms.jpg',
    // detailsLink: '/details/XY',
  },
  {
    title: 'Roboy',
    subtitle: 'Robotics',
    description: 'TUM Roboy student team',
    imageUrl: '/assets/stable-diffusion-desert-canyon.jpg',
    // detailsLink: '/details/XY',
  },
];
