import { Component, OnInit } from '@angular/core';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-knowladge',
  templateUrl: './knowladge.component.html',
  styleUrls: ['./knowladge.component.css']
})
export class KnowladgeComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  arr:any[];

  ngOnInit() {
    this.newsService.getKnowladgeNews().subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

  moreDetail(){
    console.log("test");
  }

}
