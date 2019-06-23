import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-entertaintment',
  templateUrl: './entertaintment.component.html',
  styleUrls: ['./entertaintment.component.css']
})
export class EntertaintmentComponent implements OnInit {

  constructor(private newsService:NewsService,
              private router : Router) { }

  arr:any[];

  ngOnInit() {
    this.newsService.getEntertainmentNews().subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

  moreDetail(item){
    // this.router.navigate([''])
    if(item.storySite!="Youtube"){
      this.router.navigate(['/news/'+item._id])
    }
    else{
      this.router.navigate(['/video/'+item._id])
    }
  }

}
