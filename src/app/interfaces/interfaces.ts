
 // interfaces for news api propierties
 
 /**
  * news api header attributes 
  */
 export interface headersResponse {
    status: string;
    totalResults: Number;
    articles: Article[];
};

/**
  * news api article attributes 
  */
export interface Article {
    source: Source;
    author: null | string;
    title: null | string;
    description: null | string;
    url: null | string;
    urlToImage: null | string;
    publishedAt: null | string;
    content: null | string;
};

/**
  * news api source attributes 
  */
export interface Source {
    id: null | string;
    name: null | string;
};