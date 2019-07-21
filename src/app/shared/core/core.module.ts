import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "./layout.module";

import { BooksModule } from "../../modules/books/books.module";
import { BookModule } from "../../modules/book/book.module";
import { FavoritesModule } from "../../modules/favorites/favorites.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, LayoutModule, BooksModule, BookModule, FavoritesModule],
  exports: [LayoutModule, BooksModule, BookModule, FavoritesModule]
})
export class CoreModule {}
