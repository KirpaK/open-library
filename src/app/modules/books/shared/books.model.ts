import { IBook, Book } from "src/app/shared/interfaces/Book";
import { sortDates } from "src/app/shared/helpers/sortDate";
import { get } from "src/app/shared/helpers/get";

export class BooksResponse {
  hasError: boolean;
  hasMore: boolean;
  count: number;
  total: number;
  books: IBook[];

  constructor(response) {
    const { body, status } = response;

    if (status === 200) {
      const { numFound, docs, start } = body;
      this.books = docs.map(
        d =>
          new Book({
            coverId: d.cover_i,
            title: d.title,
            authors: d.author_name,
            subjects: d.subject,
            key: d.key,
            authorKeys: d.author_key,
            firstPublishYear: d.first_publish_year,
            firstPublishDTStr: get(sortDates(d.publish_date)[0], "origin")
          })
      );
      this.total = numFound;
      this.count = this.books.length;
      this.hasMore = numFound - start > this.count;
    } else {
      this.hasError = true;
    }
  }
}
