
export class OpenLibraryConfig  {
  static originUrl = "https://openlibrary.org";

  withPagination(query: string, offset: number = 0, limit: number = 10){
    return `${query}&offset=${offset}&limit=${limit}`;
  }

  getSearchUrl(query: string, offset: number = 0, limit: number = 10): string { 
    const q = encodeURIComponent(query);
    const params = this.withPagination(`q=${q}`, offset, limit);
    return `${OpenLibraryConfig.originUrl}/search.json?${params}`;
  }
};
