import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http : HttpClient) { }

  baseURL="https://sewwas.herokuapp.com/news/";

  getInfomationNews(){
    return this.http.get(this.baseURL+"information");
  }

  getKnowladgeNews(){
    return this.http.get(this.baseURL+"knowledge");
  }

  getEntertainmentNews(){
    return this.http.get(this.baseURL+"entertainment");

  }
}
