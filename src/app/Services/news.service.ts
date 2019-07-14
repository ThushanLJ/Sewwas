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
  //baseURL="http://localhost:3006/news/";

  getInfomationNews(){
    return this.http.get(this.baseURL+"information");
  }

  getKnowladgeNews(){
    return this.http.get(this.baseURL+"knowledge");
  }

  getEntertainmentNews(){
    return this.http.get(this.baseURL+"entertainment");

  }

  getLatestNews(){
    return this.http.get(this.baseURL+"hotnews");
  }

  getNewsDetail(id){
    let params = new HttpParams().set("id",id)
    return this.http.get(this.baseURL+"idResult",{params:params})
  }

  getNewsWithUserId(data){
    var se={
      newsid:data,
      userid:localStorage.getItem('sewwasUserId')
    }
    return this.http.post(this.baseURL+'idResult',se)
  }

  addComment(data){
    return this.http.post(this.baseURL+'addNewsComment',data);
  }

  addNewsVote(data){
    console.log(data);
    return this.http.post(this.baseURL+'addNewsVote',data);
  }

  getSeaarchResult(data){
    var se={
      searchKey:data
    }
    console.log(se);
    return this.http.post(this.baseURL+'searchDetails',se);
  }

  getPagination(page,type){
    var se={
      subCategory:type,
      pageNo:page
    }
    return this.http.post(this.baseURL+'pagination',se);
  }

  getUserHistory(){
    var se={
      userid:localStorage.getItem('sewwasUserId')
    }
    return this.http.post(this.baseURL+'userHistory',se)
  }
}
