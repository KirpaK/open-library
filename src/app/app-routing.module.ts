import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { RoutesConfig } from "./config/routes.config"; 
import { BooksComponent } from "./modules/books/books.component";
import { BookComponent } from "./modules/book/book.component";
import { FavoritesComponent } from "./modules/favorites/favorites.component";
import { Error404Component } from "./pages/error404/error404.component";

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    pathMatch: "full"
  },
  {
    path: 'books/favorites',
    component: FavoritesComponent
  },
  {
    path: 'books/:id',
    component: BookComponent,
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: "**",
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
