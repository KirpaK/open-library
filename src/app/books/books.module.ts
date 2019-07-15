import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { CardComponent } from './pages/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';


@NgModule({
  declarations: [CardComponent, ListComponent, FavoritesComponent],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
