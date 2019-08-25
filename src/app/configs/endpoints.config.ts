import { InjectionToken } from '@angular/core';

export let ENDPOINTS_CONFIG = new InjectionToken('endpoints.config');

export const EndpointsConfig: any = {
  heroes: {
    list: 'book',
    detail: getBook
  }
};

export function getBook(id) {
  return `/book/${id}`;
}
