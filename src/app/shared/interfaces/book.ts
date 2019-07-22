export enum COVER_SIZE {
  Small,
  Medium,
  Large
}

export interface IBook {
  coverId: number;
  title: string;
  authors: string[];
  subjects: string[];
  key: string;
  authorKeys: string[];
  firstPublishYear: number;
  firstPublishDTStr: string;

  getCoverUrl(size: COVER_SIZE): string;
  getCoverMediumUrl(): string;
}

export class Book implements IBook {
  coverId: number;
  title: string;
  authors: string[];
  subjects: string[];
  key: string;
  authorKeys: string[];
  firstPublishYear: number;
  firstPublishDTStr: string;

  constructor(payload) {
    this.coverId = payload.coverId;
    this.title = payload.title;     
    this.authors = payload.authors || [];
    this.subjects = payload.subjects || [];
    this.key = payload.key;
    this.authorKeys = payload.authorKeys || [];
    this.firstPublishDTStr = payload.firstPublishDTStr;
    this.firstPublishYear = payload.firstPublishYear;
  }

  getCoverUrl(size: COVER_SIZE = COVER_SIZE.Medium): string {
    let ss = "";
    switch (size) {
      case COVER_SIZE.Large:
        ss = "L";
        break;
      case COVER_SIZE.Medium:
        ss = "M";
        break;
      case COVER_SIZE.Small:
        ss = "S";
        break;
    }
    return `http://covers.openlibrary.org/b/id/${this.coverId}-${ss}.jpg`;
  }

  getCoverMediumUrl() : string {
    return this.getCoverUrl(COVER_SIZE.Medium);
  }
}
