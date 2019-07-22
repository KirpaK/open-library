import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store";
import { Error404Component } from "./pages/error404/error404.component";
import { HeaderMenuComponent } from "./shared/header-menu/header-menu.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RoutesConfig, ROUTES_CONFIG } from "./config/routes.config";
import { OpenLibraryConfig } from "./config/open-library.config";
import { CoreModule } from './shared/core/core.module'; 
import { LayoutModule } from './shared/core/layout.module';

@NgModule({
  declarations: [AppComponent, Error404Component, HeaderMenuComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  ],
  providers: [
    { provide: ROUTES_CONFIG, useValue: RoutesConfig },
    { provide: OpenLibraryConfig, useClass: OpenLibraryConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
