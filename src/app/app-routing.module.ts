import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutesConfig } from "./routes.config";
import { ListComponent } from "./books/pages/list/list.component";
import { FavoritesComponent } from "./books/pages/favorites/favorites.component";
import { CardComponent } from "./books/pages/card/card.component";

const routes: Routes = [
  {
    path: RoutesConfig.routes.books.index,
    component: ListComponent,
    pathMatch: "full",
    children: [
      { path: RoutesConfig.routesNames.books.favorites, component: FavoritesComponent },
      { path: RoutesConfig.routesNames.books.details, component: CardComponent }
    ]
  },
  {
    path: "**",
    redirectTo: RoutesConfig.routes.books.index
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
