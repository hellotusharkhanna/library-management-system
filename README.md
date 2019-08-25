# LibraryManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Folder Structure
```bash
│ app-routing.module.ts
│ app.component.html
│ app.component.scss
│ app.component.spec.ts
│ app.component.ts
│ app.module.ts
│
├───configs
│ app.config.ts
│ endpoints.config.ts
│ routes.config.ts
│
├───core
│ │ core.module.ts
│ │
│ └───interceptors
│ timing.interceptor.ts
│
├───modules
│ ├───book
│ │ │ book-routing.module.ts
│ │ │ book.module.ts
│ │ │
│ │ ├───pages
│ │ │ ├───book-category-page
│ │ │ │ book-category-page.component.html
│ │ │ │ book-category-page.component.scss
│ │ │ │ book-category-page.component.spec.ts
│ │ │ │ book-category-page.component.ts
│ │ │ │
│ │ │ └───book-page
│ │ │ book-page.component.html
│ │ │ book-page.component.scss
│ │ │ book-page.component.spec.ts
│ │ │ book-page.component.ts
│ │ │
│ │ └───shared
│ │ │ book.service.spec.ts
│ │ │ book.service.ts
│ │ │
│ │ ├───components
│ │ └───interfaces
│ │ book-category.model.ts
│ │ book.model.ts
│ │
│ ├───circulation
│ │ │ circulation.module.ts
│ │ │ circulation.routes.ts
│ │ │
│ │ ├───pages
│ │ │ ├───circulation-settings-page
│ │ │ │ circulation-settings-page.component.html
│ │ │ │ circulation-settings-page.component.scss
│ │ │ │ circulation-settings-page.component.spec.ts
│ │ │ │ circulation-settings-page.component.ts
│ │ │ │
│ │ │ └───issue-return-page
│ │ │ issue-return-page.component.html
│ │ │ issue-return-page.component.scss
│ │ │ issue-return-page.component.spec.ts
│ │ │ issue-return-page.component.ts
│ │ │
│ │ └───shared
│ │ │ circulation.service.spec.ts
│ │ │ circulation.service.ts
│ │ │
│ │ ├───components
│ │ └───interfaces
│ │ circulation-settings.model.ts
│ │ issue-return.model.ts
│ │
│ ├───dashboard
│ │ │ dashboard.module.ts
│ │ │ dashboard.routes.ts
│ │ │
│ │ ├───pages
│ │ │ ├───bar-chart
│ │ │ │ bar-chart.component.html
│ │ │ │ bar-chart.component.scss
│ │ │ │ bar-chart.component.spec.ts
│ │ │ │ bar-chart.component.ts
│ │ │ │
│ │ │ ├───dashboard-page
│ │ │ │ dashboard-page.component.html
│ │ │ │ dashboard-page.component.scss
│ │ │ │ dashboard-page.component.spec.ts
│ │ │ │ dashboard-page.component.ts
│ │ │ │
│ │ │ ├───info-card
│ │ │ │ info-card.component.html
│ │ │ │ info-card.component.scss
│ │ │ │ info-card.component.spec.ts
│ │ │ │ info-card.component.ts
│ │ │ │
│ │ │ └───pie-chart
│ │ │ pie-chart.component.html
│ │ │ pie-chart.component.scss
│ │ │ pie-chart.component.spec.ts
│ │ │ pie-chart.component.ts
│ │ │
│ │ └───shared
│ │ │ dashboard.service.spec.ts
│ │ │ dashboard.service.ts
│ │ │
│ │ ├───components
│ │ └───interfaces
│ ├───general-settings
│ │ │ general-settings.module.ts
│ │ │ general-settings.routes.ts
│ │ │
│ │ ├───pages
│ │ │ └───general-settings-page
│ │ │ general-settings-page.component.html
│ │ │ general-settings-page.component.scss
│ │ │ general-settings-page.component.spec.ts
│ │ │ general-settings-page.component.ts
│ │ │
│ │ └───shared
│ │ │ general-settings.service.spec.ts
│ │ │ general-settings.service.ts
│ │ │
│ │ ├───components
│ │ └───interfaces
│ │ general-settings.model.ts
│ │
│ ├───layout
│ │ │ layout.module.ts
│ │ │ layout.routes.ts
│ │ │
│ │ ├───pages
│ │ │ └───layout-page
│ │ │ layout-page.component.html
│ │ │ layout-page.component.scss
│ │ │ layout-page.component.spec.ts
│ │ │ layout-page.component.ts
│ │ │
│ │ └───shared
│ │ ├───components
│ │ │ ├───content
│ │ │ │ content.component.html
│ │ │ │ content.component.scss
│ │ │ │ content.component.spec.ts
│ │ │ │ content.component.ts
│ │ │ │
│ │ │ ├───footer
│ │ │ │ footer.component.html
│ │ │ │ footer.component.scss
│ │ │ │ footer.component.spec.ts
│ │ │ │ footer.component.ts
│ │ │ │
│ │ │ ├───header
│ │ │ │ header.component.html
│ │ │ │ header.component.scss
│ │ │ │ header.component.spec.ts
│ │ │ │ header.component.ts
│ │ │ │
│ │ │ └───sidebar
│ │ │ sidebar.component.html
│ │ │ sidebar.component.scss
│ │ │ sidebar.component.spec.ts
│ │ │ sidebar.component.ts
│ │ │
│ │ └───interfaces
│ ├───member
│ │ │ member.module.ts
│ │ │ member.routes.ts
│ │ │
│ │ ├───pages
│ │ │ ├───generate-member-card
│ │ │ │ generate-member-card.component.html
│ │ │ │ generate-member-card.component.scss
│ │ │ │ generate-member-card.component.spec.ts
│ │ │ │ generate-member-card.component.ts
│ │ │ │
│ │ │ ├───member-page
│ │ │ │ member-page.component.html
│ │ │ │ member-page.component.scss
│ │ │ │ member-page.component.spec.ts
│ │ │ │ member-page.component.ts
│ │ │ │
│ │ │ └───member-type-page
│ │ │ member-type-page.component.html
│ │ │ member-type-page.component.scss
│ │ │ member-type-page.component.spec.ts
│ │ │ member-type-page.component.ts
│ │ │
│ │ └───shared
│ │ │ member.service.spec.ts
│ │ │ member.service.ts
│ │ │
│ │ ├───components
│ │ └───interfaces
│ │ member-type.model.ts
│ │ member.model.ts
│ │
│ └───notification
│ │ notification.module.ts
│ │ notification.routes.ts
│ │
│ ├───pages
│ │ ├───email-settings-page
│ │ │ email-settings-page.component.html
│ │ │ email-settings-page.component.scss
│ │ │ email-settings-page.component.spec.ts
│ │ │ email-settings-page.component.ts
│ │ │
│ │ ├───notify-delayed-members-page
│ │ │ notify-delayed-members-page.component.html
│ │ │ notify-delayed-members-page.component.scss
│ │ │ notify-delayed-members-page.component.spec.ts
│ │ │ notify-delayed-members-page.component.ts
│ │ │
│ │ └───sms-settings-page
│ │ sms-settings-page.component.html
│ │ sms-settings-page.component.scss
│ │ sms-settings-page.component.spec.ts
│ │ sms-settings-page.component.ts
│ │
│ └───shared
│ │ notification.service.spec.ts
│ │ notification.service.ts
│ │
│ ├───components
│ └───interfaces
│ email-settings.model.ts
│ notify-delayed-members.model.ts
│ sms-settings.model.ts
│
└───shared
│ shared.module.ts
│
├───components
│ ├───badge
│ │ badge.component.html
│ │ badge.component.scss
│ │ badge.component.spec.ts
│ │ badge.component.ts
│ │
│ ├───catalog
│ │ catalog.component.html
│ │ catalog.component.scss
│ │ catalog.component.spec.ts
│ │ catalog.component.ts
│ │
│ ├───checkbox
│ │ checkbox.component.html
│ │ checkbox.component.scss
│ │ checkbox.component.spec.ts
│ │ checkbox.component.ts
│ │
│ ├───input
│ │ input.component.html
│ │ input.component.scss
│ │ input.component.spec.ts
│ │ input.component.ts
│ │
│ ├───loading-placeholder
│ │ loading-placeholder.component.html
│ │ loading-placeholder.component.scss
│ │ loading-placeholder.component.spec.ts
│ │ loading-placeholder.component.ts
│ │
│ ├───pagination
│ │ pagination.component.html
│ │ pagination.component.scss
│ │ pagination.component.spec.ts
│ │ pagination.component.ts
│ │
│ ├───radio
│ │ radio.component.html
│ │ radio.component.scss
│ │ radio.component.spec.ts
│ │ radio.component.ts
│ │
│ ├───select
│ │ select.component.html
│ │ select.component.scss
│ │ select.component.spec.ts
│ │ select.component.ts
│ │
│ └───spinner
│ spinner.component.html
│ spinner.component.scss
│ spinner.component.spec.ts
│ spinner.component.ts
│
├───interfaces
│ deserializable.interface.ts
│
├───modules
│ firebase.module.ts
│ material.module.ts
│
├───pipes
│ capitalize-first.pipe.spec.ts
│ capitalize-first.pipe.ts
│
├───services
│ logger.service.spec.ts
│ logger.service.ts
│ progress-bar.service.spec.ts
│ progress-bar.service.ts
│ utils-helper.service.spec.ts
│ utils-helper.service.ts
│
└───styles
global.scss
material.scss
\_colors.scss
\_functions.scss
\_mixins.scss
```
