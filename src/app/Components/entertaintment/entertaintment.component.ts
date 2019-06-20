import { Component, OnInit } from '@angular/core';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-entertaintment',
  templateUrl: './entertaintment.component.html',
  styleUrls: ['./entertaintment.component.css']
})
export class EntertaintmentComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  arr:any[];

  ngOnInit() {
    this.newsService.getEntertainmentNews().subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

  moreDetail(){
    console.log("test");
  }

}
