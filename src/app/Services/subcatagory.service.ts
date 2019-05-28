import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubcatagoryService {

  constructor(private http:HttpClient) { }

  baseURL="http://localhost:3006/news/";
  baseURL2="http://localhost:3006/fetch_v2/";

  getInformationCategory(){
    return this.http.get(this.baseURL+"hotnews");
  }

  getBizNews(){
    return this.http.get(this.baseURL+"bizNews");
  }

  getNewsVideos(){
    return this.http.get(this.baseURL2+"getNewsVideos");
  }
}
