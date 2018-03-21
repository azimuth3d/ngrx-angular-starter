# ImnoexAngularStarter

## description

This starter ahs build for imnoex co.,ltd frontend reactive angualr application

### Reactive Archectiture

![Reactive Architecture](http://res.cloudinary.com/dquj9ig39/image/upload/v1521599707/ReactiveArch_cmsi14.png)

All we need in ecosystem are

* NGRX store ( https://github.com/ngrx/platform)
* Unit testing with jest (https://facebook.github.io/jest/)
* Reactive Extension Rxjs (http://reactivex.io/rxjs/)

### Store , Reducer and Effect diagram

![Store Effect](http://res.cloudinary.com/dquj9ig39/image/upload/v1521599709/StoreEffect_h2ro1i.png)

## folder structure

```bash
├── e2e                                     //end to end test code
│ ├── app.e2e-spec.ts
│ ├── app.po.ts  
├── src
│
│ ├── assets                                  // assets folder
│ ├── config
│ ├── environments
│ │ ├── environment.prod.ts
│ │ └── environment.ts
│ ├── favicon.ico
│ ├── githunt                                 // feature module  folder
│ │ ├── components                            // reactive component (render only)
│ │ │ ├── result-cell
│ │ │ │ ├── result-cell.component.html
│ │ │ │ ├── result-cell.component.scss
│ │ │ │ └── result-cell.component.ts
│ │ │ └── search-box
│ │ │ └── search-box.component.ts
│ │ ├── configs                           // save all config
│ │ │ └── index.ts
│ │ ├── containers                        // Container  working with store and pass value to each component
│ │ │ ├── githunt.container.html
│ │ │ ├── githunt.container.scss
│ │ │ └── githunt.container.ts
│ │ ├── githunt.module.ts                // Feature module for container container and all nesscessary module
│ │ ├── models
│ │ │ └── index.ts
| | |--- store                          // store  folder  contain reducer ,effect and  action
│ │ └── reducers
│ │ └── index.ts
│ ├── index.html
│ ├── main                              //  main application module ()
│ │ ├── actions
│ │ │ └── index.ts
│ │ ├── configs
│ │ │ └── index.ts
│ │ ├── containers
│ │ │ └── app
│ │ │ ├── app.component.html
│ │ │ ├── app.component.scss
│ │ │ └── app.component.ts
│ │ ├── main.module.ts
│ │ └── reducers
│ │ └── index.ts
│ ├── main.ts
│ ├── polyfills.ts
│ ├── setup-jest.ts                         // setup for jest
│ ├── shared                                //  shared module for application scope
│ │ └── custom-material.module.ts
│ ├── styles.scss
│ ├── test.ts
│ ├── theme.scss
│ ├── tsconfig.app.json
│ ├── tsconfig.spec.json
│ └── typings.d.ts
├── tsconfig.json
├── tslint.json
```

## Development server

Run `ng serve` or `npm run start` or `yarn start`  for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build for production

run `npm run build:production`

## Running unit tests

Run `npm run test:watch` to execute the all unit tests by jest and watch changin of code or you can generate coverage report by `npm run test:coverage`
