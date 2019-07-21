import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent, HttpEventType } from "@angular/common/http";
import { OpenLibraryConfig } from "../../../config/open-library.config";
import { Observable } from 'rxjs';
import { BooksResponse } from './books.model';

@Injectable({
  providedIn: "root"
})
export class BooksService {
  constructor(private http: HttpClient, private conf: OpenLibraryConfig) {}
 
  booksResponse: BooksResponse;
  loading: boolean;

  search(q: string, offset: number, limit: number): Observable<HttpEvent<BooksResponse>> {
    const url = this.conf.getSearchUrl(q, offset, limit);

    const req = new HttpRequest('GET', url);
    const res = this.http.request<BooksResponse>(req);
    
    res.subscribe(response => {
      this.loading = true;
      if (response.type === HttpEventType.Response) {
        this.booksResponse = new BooksResponse(response);
        this.loading = false;
      }
    });

    return res;
  }
}
