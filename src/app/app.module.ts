import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store";
import { BooksModule } from "./modules/books/books.module";
import { BookModule } from "./modules/book/book.module";
import { Error404Component } from "./pages/error404/error404.component";
import { HeaderMenuComponent } from "./shared/header-menu/header-menu.component";
import { FavoritesModule } from './modules/favorites/favorites.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutesConfig, ROUTES_CONFIG } from './routes.config';

@NgModule({
  declarations: [AppComponent, Error404Component, HeaderMenuComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    BrowserAnimationsModule,
    BooksModule,
    BookModule,
    FavoritesModule
  ],
  providers: [
    {provide: ROUTES_CONFIG, useValue: RoutesConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
