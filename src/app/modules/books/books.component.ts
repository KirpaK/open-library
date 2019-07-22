import { Component, OnInit, Input, Output } from "@angular/core";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { BooksService } from "./shared/books.service";
import { IBook } from "src/app/shared/interfaces/Book";

@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.styl"],
  styles: [
    `
      :host {
        width: 100%;
      }
    `
  ]
})
export class BooksComponent implements OnInit {
  displayColumns: string[] = ["thumbnail", "title", "firstPublishDTStr", "authors", "publishers", "subjects"];
  pageSize: number = 5;
  page: number = 0;
  total: number = 0;
  books: IBook[];
  loading: boolean;
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];
  filterForm: FormGroup;
  timer: any;

  constructor(private service: BooksService, private fb: FormBuilder) {
    this._createForm();
  }

  private _createForm() {
    this.filterForm = new FormGroup({
      search: new FormControl(""),
      columns: new FormControl(this.displayColumns)
    });
    this.filterForm.valueChanges.subscribe(v => {
      this.displayColumns = this.filterForm.get("columns").value;
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => this.onChangeFilters(), 600);
    });
  }

  search() {
    const offset = this.page * this.pageSize;
    const searchValue = `${this.filterForm.get("search").value}` || "the lord of the rings";

    const res = this.service.search(searchValue, offset, this.pageSize);
    res.subscribe(() => {
      const { loading, booksResponse } = this.service;
      this.loading = loading;
      if (!loading) {
        const { books, hasError, total } = booksResponse;
        if (!hasError) {
          this.books = books;
          this.total = total;
        }
      }
    });
  }

  onChangePage(pageEvent: { pageSize: number; pageIndex: number }) {
    this.pageSize = pageEvent.pageSize;
    this.page = pageEvent.pageIndex;
    this.search();
  }

  onChangeFilters() {
    this.page = 0;
    this.search();
  }

  ngOnInit() {
    this.search();
  }
}
