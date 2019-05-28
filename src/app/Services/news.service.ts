import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:3006/news/";

  getInfomationNews(){
    return this.http.get(this.baseURL+"bizNews");
  }

  getKnowladgeNews(){
    return this.http.get(this.baseURL+"bizNews");
  }

  getEntertainmentNews(){
    return this.http.get(this.baseURL+"bizNews");
    
  }

  getLatestNews(){
    return this.http.get(this.baseURL+"hotnews");
    
  }
}
