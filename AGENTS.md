# AGENTS.md - Homepage

## Overview

This repository contains the code and assets for a personal website / homepage.

## Tech Stack

The tech stack uses Angular (v19+) and TypeScript (v5.6+).
The UI relies on Angular Material as the primary design system.
Jest is configured for testing, but no tests are required for this project.

Prefer modern coding practices, e.g., zoneless Angular.

## Project Structure

The main entry point is `src/main.ts`, the root component is `src/app/app.ts`, the routes are defined in `src/app/routes.ts`.

The website has a header and a content area which is organized into pages.
Currently, there are two main pages:

- `home` in `src/app/page-home`: shown by default, contains a brief bio, highlighted projects, and some additional details
- `projects` in `src/app/page-projects`: a larger gallery of projects

Several projects have dedicated subpages with more project-specific details.
The corresponding components are in the `src/app/projects` folder.

Additional reusable components like `project-card` or `list-entry` are located in the corresponding subfolders in `src/app/`.

The assets (mostly images) are located in `src/assets`, and grouped by the main page / project subpage.
When adding new assets, take a look at the current structure first.

Code is formatted with Prettier, see config in `package.json`.
ESLint is not used so far.

## Hosting

The website is static and is intended to be hosted on GitHub pages.
Once new code is pushed to the `deploy` branch, a GitHub action (see `.github/workflows/main.yaml`)
builds the project and pushes the build result to the `gh-pages` branch.
GitHub then deploys the build result to `https://nbasargin.github.io/homepage`.

GitHub pages do not directly support routing, e.g., a direct access to
`https://nbasargin.github.io/homepage/projects` will show a 404 error.
To enable routing, this repository contains a custom 404 page (see `src/404.html`)
that stores the route in `localStorage` and redirects to the root page.
Angular then checks `localStorage` in `src/app/app.ts` `ngOnInit` and performs routing to the target page.

## Build and Environment Configuration

The environment configurations for local testing and production are defined in the `src/environments` folder.
The developer can manually perform local testing using `ng serve` and inspect the website in the browser.
Use `npm run build:prod` for the production build (primarily for automatic deployment).
Production builds go to `dist/homepage/browser`.
The main difference of the production environment is the changed `baseUrl` to match the GitHub page.
