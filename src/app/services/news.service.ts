import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { headersResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})

export class NewsService {

  /**
   * @constructor constructor services to declare the http class and call the gets methods
   * @param _http class that performs http requests
   */
  constructor(private _http:HttpClient) { };

  /**
   * @returns a promise with the headers and content of news page api
   */
  getNews() {
    
    return new Promise<headersResponse>( resolve => {
      this._http.get<headersResponse>(`${environment.apiUrl}top-headlines?country=us&category=business&apiKey=${environment.apiKey}`).subscribe(resp => resolve(resp));

    });

  };
  
};
