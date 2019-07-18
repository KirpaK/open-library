import { InjectionToken } from "@angular/core";

export let ROUTES_CONFIG = new InjectionToken("routes.config");

const basePaths = {
  books: "books"
};

const routesNames = {
  home: "",
  error404: "404",
  books: {
    basePath: basePaths.books,
    favorites: `${basePaths.books}/favorites`,
    detail: `${basePaths.books}/:id`
  }
};

export const RoutesConfig: any = {
  routesNames,
  routes: {
    home: `/${routesNames.home}`,
    error404: `/${routesNames.error404}`,
    books: {
      favorites: `/${routesNames.books.favorites}`,
      detail: getBookDetailUri
    }
  }
};

export function getHomeUri(search, columns, subjects) {
  return `/`;
}

export function getFavoitesUri(keyWords) {
  return `/${routesNames.books.favorites}`;
}

export function getBookDetailUri(id) {
  return `/${routesNames.books.detail.replace(":id", id)}`;
}
