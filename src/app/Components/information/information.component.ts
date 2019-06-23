import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private newsService:NewsService,
              private router : Router) { }

  infoNews:any[];
  arr:any[];

  ngOnInit() {
    this.newsService.getInfomationNews().subscribe((data:any)=>{
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
