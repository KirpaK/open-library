import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutesConfig } from "./config/routes.config"; 
import { BooksComponent } from "./modules/books/books.component";
import { BookComponent } from "./modules/book/book.component";
import { FavoritesComponent } from "./modules/favorites/favorites.component";
import { Error404Component } from "./pages/error404/error404.component";

const { routesNames } = RoutesConfig;

const routes: Routes = [
  {
    path: routesNames.home,
    component: BooksComponent,
    pathMatch: "full"
  },
  {
    path: routesNames.books.favorites,
    component: FavoritesComponent
  },
  {
    path: routesNames.books.detail,
    component: BookComponent
  },
  {
    path: routesNames.error404,
    component: Error404Component
  },
  {
    path: "**",
    redirectTo: RoutesConfig.routes.error404
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
