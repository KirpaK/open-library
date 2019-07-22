import { Component, OnInit, Input, DoCheck } from "@angular/core";
import { IBook } from "src/app/shared/interfaces/Book";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-books-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.styl"]
})
export class TableComponent implements OnInit, DoCheck {
  constructor() {}

  @Input() books: IBook[] = [];
  dataSource = new MatTableDataSource<IBook>(this.books);
  @Input()
  displayedColumns: string[];
  ngOnInit() {}

  ngDoCheck() {
    console.log(this.displayedColumns);
    this.dataSource = new MatTableDataSource<IBook>(this.books);
  }
}
