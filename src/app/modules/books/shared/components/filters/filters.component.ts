import { Component, OnInit, Input, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-books-filter",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.styl"]
})
export class FiltersComponent implements OnInit {
  constructor() {}
  @Input()
  formGroup: FormGroup;

  columnsList: any[] = [
    {
      label: "Thumbnail",
      value: "thumbnail"
    },
    {
      label: "Title",
      value: "title"
    },
    {
      label: "Publish date",
      value: "firstPublishDTStr"
    },
    {
      label: "Authors",
      value: "authors"
    },
    {
      label: "Publishers",
      value: "publishers"
    },
    {
      label: "Subjects",
      value: "subjects"
    }
  ];

  subjectsList = [];

  ngOnInit() {}
}
