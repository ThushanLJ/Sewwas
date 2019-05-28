import { Component, OnInit } from '@angular/core';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  infoNews:any[];
  arr:any[];

  ngOnInit() {
    this.newsService.getInfomationNews().subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

  moreDetail(){
    console.log("test");
  }

}
