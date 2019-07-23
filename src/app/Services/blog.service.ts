import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http : HttpClient) { }

  baseURL="https://sewwas.herokuapp.com/blog/";

  publishBlog(data){
    return this.http.post(this.baseURL+"saveBlog",data)
  }

  getrecentBlog(){
    return this.http.get(this.baseURL+"getRecentBlog");
  }

  getEntertainmentBlog(){
    return this.http.get(this.baseURL+"getEntertainmentBlog");
  }

  getKnowledgeBlog(){
    return this.http.get(this.baseURL+"getKnowledgeBlog");
  }

  getInformationBlog(){
    return this.http.get(this.baseURL+"getInformationBlog");
  }

  getUserBlog(){
    var se={
      email:localStorage.getItem('sewwasEmail')
    }
    return this.http.post(this.baseURL+"getuserBlog",se);
  }

  getBlog(data){
    var se={
      blogid:data
    }
    return this.http.post(this.baseURL+'getBlog',se);
  }

  addVote(data){
    return this.http.post(this.baseURL+'addVote',data);
  }

  addComment(data){
    return this.http.post(this.baseURL+'addComment',data);
  }
}
