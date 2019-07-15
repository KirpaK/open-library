import {InjectionToken} from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');

const basePaths = {
  books: 'books',
};

const routesNames = {
  home: '',
  error404: '404',
  books: {
    basePath: basePaths.books,
    index: '',
    favorites: 'favorites',
    details: ':id'
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    books: {
      index: `/${basePaths.books}/${routesNames.books.index}`,
      detail: getBookDetail,
      favorites: `/${basePaths.books}/${routesNames.books.favorites}`
    }
  }
};

export function getBookDetail(id) {
  return `/${basePaths.books}/${id}`;
}