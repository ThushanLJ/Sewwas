import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-knowladge',
  templateUrl: './knowladge.component.html',
  styleUrls: ['./knowladge.component.css']
})
export class KnowladgeComponent implements OnInit {

  constructor(private newsService:NewsService,
              private router : Router) { }

  arr:any[];

  ngOnInit() {
    this.newsService.getKnowladgeNews().subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

  moreDetail(item){
    // this.router.navigate([''])
    if(item.storySite!='youtube'){
      this.router.navigate(['/news/'+item._id])
    }
    else{
      this.router.navigate(['/video/'+item._id])
    }
  }

}
