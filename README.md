# Ehealth

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

flow-chart
src/
├── app/
│ ├── core/
│ │ ├── header/
│ │ │ ├── header.component.ts // Optional shared header (if needed)
│ │ │ ├── header.component.html
│ │ │ ├── header.component.css
│ │ ├── services/
│ │ │ ├── some-service.service.ts // Shared services (e.g., APIs, utilities)
│ ├── pages/ // Pages directory for feature separation
│ │ ├── page1/
│ │ │ ├── page1.component.ts
│ │ │ ├── page1.component.html
│ │ │ ├── page1.component.css
│ │ ├── page2/
│ │ │ ├── page2.component.ts
│ │ │ ├── page2.component.html
│ │ │ ├── page2.component.css
│ │ ├── page3/
│ │ │ ├── page3.component.ts
│ │ │ ├── page3.component.html
│ │ │ ├── page3.component.css
│ ├── shared/
│ │ ├── components/
│ │ │ ├── footer/
│ │ │ │ ├── footer.component.ts // Shared footer
│ │ │ │ ├── footer.component.html
│ │ │ │ ├── footer.component.css
│ │ ├── models/ // Reusable models (e.g., interfaces)
│ │ │ ├── user.model.ts
│ ├── app.component.ts
│ ├── app.component.html
│ ├── app.component.css
│ ├── app.module.ts
│ ├── app-routing.module.ts
├── assets/ // Static assets like images, fonts, etc.
│ ├── logo.png
├── styles.css // Global styles
