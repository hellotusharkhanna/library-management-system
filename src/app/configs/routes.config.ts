import { InjectionToken } from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  book: 'book'
};

const routesNames = {
  home: '',
  error404: '404',
  book: {
    basePath: basePaths.book
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    book: {
      detail: getBook
    }
  }
};

export function getBook(id) {
  return `/${basePaths.book}/${id}`;
}
