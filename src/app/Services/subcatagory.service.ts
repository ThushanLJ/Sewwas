import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SubcatagoryService {

  baseURL="https://sewwas.herokuapp.com/fetch_v2/";
  baseURL2="https://sewwas.herokuapp.com/news/";
  // baseURL="http://localhost:3006/news/";
  // baseURL2="hhttp://localhost:3006/news/";

  constructor(private http : HttpClient) { }

  getInformationCategory(){
    return this.http.get(this.baseURL2+"hotnews");
  }

  getBizNews(){
    return this.http.get(this.baseURL2+"bizNews");
  }

  getNewsVideos(){
    return this.http.get(this.baseURL+"getNewsVideos");}
  

  getTeledramas(){
    return this.http.get(this.baseURL+"getTeledramas");
  }

  getMusicVideos(){
    return this.http.get(this.baseURL+"getMusicVideos")
  }

  getSportNews(){
    return this.http.get(this.baseURL2+'sportNews');
  }

  getComedyVideos(){
    return this.http.get(this.baseURL+"getComedyVideos");
  }

  getGossipNews(){
    return this.http.get(this.baseURL2+"entNews");
  }

  getTravalVideo(){
    return this.http.get(this.baseURL+"getTravelVideos");
  }

  getTechNews(){
    return this.http.get(this.baseURL2+"techNews");
  }
}
