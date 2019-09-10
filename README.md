# Library Management System

Allows the Admin to:

- Add new books to the database.
- Update existing book’s information in the database.
- Delete old books from the database.
- List all the books in the database with their available and total copies.
- Retrieve book by their identifier key.
- Issue books to Users only if
  - The book exists.
  - Copy of the book is available.
  - User can only have 3 books issued to him with 2 books per week quota.

> Note: Book can only be issued for 3 weeks and User should get notification before 2 days of return date.

There are different modules inside this application:

# 1. Dashboard Module:

To view dashboard visually.

- Renders **Pie chart** for:
  Total Issued books + Expired but not Returned Books

- **Overall Report** is shown
  Total Number of Books +
  Total Number of Issued Books +
  Total Number of Members

- **Today's Report** is shown
  Today's Added Books +
  Today's Issued Books +
  Today's Returned Books +
  Today's Added Members

- Similarly, **Current Month's** report is shown

- Bar graph is shown for - **Issued and Returned Report for Last 12 Months**

# 2. General Settings Module:

Allows to update about Library.
For example: Institute Name, Address, Mobile Number, Logo, Language, Timezone, etc.

# 3. Book Module:

It has 2 different pages.

- **Book** : **CRUD**(Create, Read, Update, Delete) and **Search** operations.
  Shows list of:

  - ISBN
  - Book ID
  - Availability
  - Title
  - Author
  - Add date
  - Language
  - Issued To

- **Book Category** : **CRUD** operations for **Book Category** and **Search**.
  Shows list of:

  - Category Id
  - Category name

# 4. Member Module:

It has 3 different pages.

- Member Type : **CRUD**(Create, Read, Update, Delete) and **Search** operations.
  Shows list of:

  - Type Id
  - Member Type

- Member: **CRUD**(Create, Read, Update, Delete) and **Search** operations.
  Shows list of:

  - Name
  - User type
  - Member type
  - Email
  - Mobile number
  - Address
  - Status

- Generate Member Card: Allows to generate printable membership card.

# 5. Circulation Module:

It has 2 different pages.

- Circulation Settings : **CRUD**(Create, Read, Update, Delete) and **Search** operations.
  Shows list of:

  - Member type
  - Issue Limit - Days
  - Issue Limit - Books
  - Fine

- Issue And Return: **CRUD**(Create, Read, Update, Delete) and **Search** operations.
  Shows list of:

  - Book ID
  - Member name
  - Book Title
  - Book Author
  - Issue Date
  - Expiry Date
  - Return Date
  - Fine

# 6. Notification Module:

It has 3 different pages.

- SMS Settings :
  Allows to set SMS Gateway, Username, Password, Mobile number from which notifications to the members are sent via **SMS**.

- Email Settings:
  Allows to set Email, SMTP Username, SMTP Password, SMTP Port from which notifications to the members are sent via **Email**.

- Notify Delayed Members:
  Allows to send Notifications via **SMS** and **Email** to remind them for returning their books.
  Shows list of:

  - Member names
  - Email
  - Mobile
  - Issue Date
  - Expiry Date
  - Book Title

# Technical Details

## Folder Structure

Inspiration has been taken from below sources for Folder Structure:
https://angular.io/guide/styleguide#style-04-06, https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7 and https://github.com/Ismaestro/angular8-example-app

```bash

│   app-routing.module.ts
│   app.component.html
│   app.component.scss
│   app.component.spec.ts
│   app.component.ts
│   app.module.ts
│
├───configs
│       app-settings.config.ts
│       routes.config.ts
│
├───core
│   │   core.module.ts
│   │
│   ├───guards
│   │       auth.guard.ts
│   │       module-import.guard.ts
│   │       no-auth.guard.ts
│   │
│   └───interceptors
│           timing.interceptor.ts
│           token.interceptor.ts
│
├───layout
│   │   layout.module.ts
│   │   layout.routes.ts
│   │
│   ├───auth-layout
│   │       auth-layout.component.html
│   │       auth-layout.component.scss
│   │       auth-layout.component.spec.ts
│   │       auth-layout.component.ts
│   │
│   ├───content-layout
│   │       content-layout.component.html
│   │       content-layout.component.scss
│   │       content-layout.component.spec.ts
│   │       content-layout.component.ts
│   │
│   ├───footer
│   │       footer.component.html
│   │       footer.component.scss
│   │       footer.component.spec.ts
│   │       footer.component.ts
│   │
│   ├───header
│   │       header.component.html
│   │       header.component.scss
│   │       header.component.spec.ts
│   │       header.component.ts
│   │
│   └───nav
│           nav.component.html
│           nav.component.scss
│           nav.component.spec.ts
│           nav.component.ts
│
├───modules
│   ├───auth
│   │   │   auth.module.ts
│   │   │   auth.routes.ts
│   │   │
│   │   ├───pages
│   │   │   ├───login
│   │   │   │       login-page.component.html
│   │   │   │       login-page.component.scss
│   │   │   │       login-page.component.spec.ts
│   │   │   │       login-page.component.ts
│   │   │   │
│   │   │   └───register
│   │   │           register-page.component.html
│   │   │           register-page.component.scss
│   │   │           register-page.component.spec.ts
│   │   │           register-page.component.ts
│   │   │
│   │   └───shared
│   │       │   auth.service.spec.ts
│   │       │   auth.service.ts
│   │       │
│   │       ├───components
│   │       └───models
│   ├───book
│   │   │   book-routing.module.ts
│   │   │   book.module.ts
│   │   │
│   │   ├───pages
│   │   │   ├───book-category-page
│   │   │   │       book-category-page.component.html
│   │   │   │       book-category-page.component.scss
│   │   │   │       book-category-page.component.spec.ts
│   │   │   │       book-category-page.component.ts
│   │   │   │
│   │   │   └───book-page
│   │   │           book-page.component.html
│   │   │           book-page.component.scss
│   │   │           book-page.component.spec.ts
│   │   │           book-page.component.ts
│   │   │
│   │   └───shared
│   │       │   book.service.spec.ts
│   │       │   book.service.ts
│   │       │
│   │       ├───components
│   │       └───models
│   │               book-category.model.ts
│   │               book.model.ts
│   │
│   ├───circulation
│   │   │   circulation.module.ts
│   │   │   circulation.routes.ts
│   │   │
│   │   ├───pages
│   │   │   ├───circulation-settings-page
│   │   │   │       circulation-settings-page.component.html
│   │   │   │       circulation-settings-page.component.scss
│   │   │   │       circulation-settings-page.component.spec.ts
│   │   │   │       circulation-settings-page.component.ts
│   │   │   │
│   │   │   └───issue-return-page
│   │   │           issue-return-page.component.html
│   │   │           issue-return-page.component.scss
│   │   │           issue-return-page.component.spec.ts
│   │   │           issue-return-page.component.ts
│   │   │
│   │   └───shared
│   │       │   circulation.service.spec.ts
│   │       │   circulation.service.ts
│   │       │
│   │       ├───components
│   │       └───models
│   │               circulation-settings.model.ts
│   │               issue-return.model.ts
│   │
│   ├───dashboard
│   │   │   dashboard.module.ts
│   │   │   dashboard.routes.ts
│   │   │
│   │   ├───pages
│   │   │   └───dashboard-page
│   │   │           dashboard-page.component.html
│   │   │           dashboard-page.component.scss
│   │   │           dashboard-page.component.spec.ts
│   │   │           dashboard-page.component.ts
│   │   │
│   │   └───shared
│   │       │   dashboard.service.spec.ts
│   │       │   dashboard.service.ts
│   │       │
│   │       ├───components
│   │       │   ├───bar-chart
│   │       │   │       bar-chart.component.html
│   │       │   │       bar-chart.component.scss
│   │       │   │       bar-chart.component.spec.ts
│   │       │   │       bar-chart.component.ts
│   │       │   │
│   │       │   ├───info-card
│   │       │   │       info-card.component.html
│   │       │   │       info-card.component.scss
│   │       │   │       info-card.component.spec.ts
│   │       │   │       info-card.component.ts
│   │       │   │
│   │       │   └───pie-chart
│   │       │           pie-chart.component.html
│   │       │           pie-chart.component.scss
│   │       │           pie-chart.component.spec.ts
│   │       │           pie-chart.component.ts
│   │       │
│   │       └───models
│   ├───general-settings
│   │   │   general-settings.module.ts
│   │   │   general-settings.routes.ts
│   │   │
│   │   ├───pages
│   │   │   └───general-settings-page
│   │   │           general-settings-page.component.html
│   │   │           general-settings-page.component.scss
│   │   │           general-settings-page.component.spec.ts
│   │   │           general-settings-page.component.ts
│   │   │
│   │   └───shared
│   │       │   general-settings.service.spec.ts
│   │       │   general-settings.service.ts
│   │       │
│   │       ├───components
│   │       └───models
│   │               general-settings.model.ts
│   │
│   ├───member
│   │   │   member.module.ts
│   │   │   member.routes.ts
│   │   │
│   │   ├───pages
│   │   │   ├───generate-member-card
│   │   │   │       generate-member-card.component.html
│   │   │   │       generate-member-card.component.scss
│   │   │   │       generate-member-card.component.spec.ts
│   │   │   │       generate-member-card.component.ts
│   │   │   │
│   │   │   ├───member-page
│   │   │   │       member-page.component.html
│   │   │   │       member-page.component.scss
│   │   │   │       member-page.component.spec.ts
│   │   │   │       member-page.component.ts
│   │   │   │
│   │   │   └───member-type-page
│   │   │           member-type-page.component.html
│   │   │           member-type-page.component.scss
│   │   │           member-type-page.component.spec.ts
│   │   │           member-type-page.component.ts
│   │   │
│   │   └───shared
│   │       │   member.service.spec.ts
│   │       │   member.service.ts
│   │       │
│   │       ├───components
│   │       └───models
│   │               member-type.model.ts
│   │               member.model.ts
│   │
│   └───notification
│       │   notification.module.ts
│       │   notification.routes.ts
│       │
│       ├───pages
│       │   ├───email-settings-page
│       │   │       email-settings-page.component.html
│       │   │       email-settings-page.component.scss
│       │   │       email-settings-page.component.spec.ts
│       │   │       email-settings-page.component.ts
│       │   │
│       │   ├───notify-delayed-members-page
│       │   │       notify-delayed-members-page.component.html
│       │   │       notify-delayed-members-page.component.scss
│       │   │       notify-delayed-members-page.component.spec.ts
│       │   │       notify-delayed-members-page.component.ts
│       │   │
│       │   └───sms-settings-page
│       │           sms-settings-page.component.html
│       │           sms-settings-page.component.scss
│       │           sms-settings-page.component.spec.ts
│       │           sms-settings-page.component.ts
│       │
│       └───shared
│           │   notification.service.spec.ts
│           │   notification.service.ts
│           │
│           ├───components
│           └───models
│                   email-settings.model.ts
│                   notify-delayed-members.model.ts
│                   sms-settings.model.ts
│
└───shared
    │   shared.module.ts
    │
    ├───components
    │   ├───badge
    │   │       badge.component.html
    │   │       badge.component.scss
    │   │       badge.component.spec.ts
    │   │       badge.component.ts
    │   │
    │   ├───button
    │   │       button.component.html
    │   │       button.component.scss
    │   │       button.component.spec.ts
    │   │       button.component.ts
    │   │
    │   ├───catalog
    │   │       catalog.component.html
    │   │       catalog.component.scss
    │   │       catalog.component.spec.ts
    │   │       catalog.component.ts
    │   │
    │   ├───checkbox
    │   │       checkbox.component.html
    │   │       checkbox.component.scss
    │   │       checkbox.component.spec.ts
    │   │       checkbox.component.ts
    │   │
    │   ├───input
    │   │       input.component.html
    │   │       input.component.scss
    │   │       input.component.spec.ts
    │   │       input.component.ts
    │   │
    │   ├───loading-placeholder
    │   │       loading-placeholder.component.html
    │   │       loading-placeholder.component.scss
    │   │       loading-placeholder.component.spec.ts
    │   │       loading-placeholder.component.ts
    │   │
    │   ├───pagination
    │   │       pagination.component.html
    │   │       pagination.component.scss
    │   │       pagination.component.spec.ts
    │   │       pagination.component.ts
    │   │
    │   ├───radio
    │   │       radio.component.html
    │   │       radio.component.scss
    │   │       radio.component.spec.ts
    │   │       radio.component.ts
    │   │
    │   ├───select
    │   │       select.component.html
    │   │       select.component.scss
    │   │       select.component.spec.ts
    │   │       select.component.ts
    │   │
    │   └───spinner
    │           spinner.component.html
    │           spinner.component.scss
    │           spinner.component.spec.ts
    │           spinner.component.ts
    │
    ├───directives
    ├───interfaces
    │       deserializable.interface.ts
    │
    ├───modules
    │       firebase.module.ts
    │       material.module.ts
    │
    ├───pipes
    │       capitalize-first.pipe.spec.ts
    │       capitalize-first.pipe.ts
    │
    ├───services
    │       logger.service.spec.ts
    │       logger.service.ts
    │       progress-bar.service.spec.ts
    │       progress-bar.service.ts
    │       utils-helper.service.spec.ts
    │       utils-helper.service.ts
    │
    └───styles
            global.scss
            material.scss
            _colors.scss
            _functions.scss
            _mixins.scss

```

# UML Diagrams:

## 1. Use Case Diagram

![UML Diagram](https://github.com/hellotusharkhanna/library-management-system/raw/master/UML%20Use%20Case%20Diagram.jpg)

## 2. Activity Diagram - Issue Book

![UML Diagram](https://github.com/hellotusharkhanna/library-management-system/raw/master/UML%20Activity%20Diagram%20-%20Issue%20Book.jpg)

## 3. Activity Diagram - Return Book

![UML Diagram](https://github.com/hellotusharkhanna/library-management-system/raw/master/UML%20Activity%20Diagram%20-%20Return%20Book.jpg)

## 4. Sequence Diagram - Issue Book

![UML Diagram](https://github.com/hellotusharkhanna/library-management-system/raw/master/UML%20Sequence%20Diagram%20-%20Issue%20Book.jpg)

## 5. Sequence Diagram - Return Book

![UML Diagram](https://github.com/hellotusharkhanna/library-management-system/raw/master/UML%20Sequence%20Diagram%20-%20Return%20Book.jpg)
