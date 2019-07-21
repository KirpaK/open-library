import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksComponent } from "./books.component";
import { BooksService } from "./shared/books.service";

@NgModule({
  declarations: [BooksComponent],
  imports: [CommonModule],
  providers: [BooksService]
})
export class BooksModule {}
