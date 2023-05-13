# Chek Balance App

This is an Angular-based application that allows users to login and view their wallet balance. This app interacts with the BFF service to perform these actions.

## Features

- User login
- Fetch and display logged-in user's wallet balance

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites

- Node.js
- NPM
- Angular CLI

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

## Project Structure

```
├── app
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app-routing.module.ts
│   ├── balance
│   │   ├── balance.component.css
│   │   ├── balance.component.html
│   │   ├── balance.component.spec.ts
│   │   └── balance.component.ts
│   ├── login
│   │   ├── login.component.css
│   │   ├── login.component.html
│   │   ├── login.component.spec.ts
│   │   └── login.component.ts
│   └── services
│       ├── auth.service.spec.ts
│       ├── auth.service.ts
│       ├── wallet.service.spec.ts
│       └── wallet.service.ts
├── assets
├── environments
│   ├── environment.development.ts
│   ├── environment.prod.ts
│   └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
└── styles.css
```

## Authors

- Ignacio Codina - https://github.com/igcodinap
