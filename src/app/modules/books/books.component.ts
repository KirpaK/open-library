import { Component, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';
import { BooksService } from "./shared/books.service";
import { IBook } from "src/app/shared/interfaces/Book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.styl"]
})
export class BooksComponent implements OnInit {
  pageSize: number = 5;
  page: number = 1;
  numberOfPages: number = 0;
  books: IBook[];
  loading: boolean;

  filterForm: FormGroup;

  constructor(private service: BooksService) {
    this._createForm();
    
  }
 
  private _createForm(){
    this.filterForm = new FormGroup({
      search: new FormControl({
        value: '',
        valueChanges: this.search
      })
    });
  }

  search() {
    const offset = this.page * this.pageSize;
    const searchValue = `${this.filterForm.get('search')}`;
    
    const res = this.service.search(searchValue, offset, this.pageSize);
    res.subscribe(() => {
      const { loading, booksResponse } = this.service;
      this.loading = loading;
      if (!loading) {
        const { books, hasError, total } = booksResponse;
        if (!hasError) {
          this.books = books;
          this.numberOfPages = Math.ceil(total / this.pageSize);
        }
      }
    });
  }

  onChangePage(page: number) {
    this.page = page;
    this.search();
  }

  ngOnInit() {
    this.search();
  }
}
