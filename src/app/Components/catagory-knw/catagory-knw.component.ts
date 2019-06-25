import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NewsService} from '../../services/news.service';
import {SubcatagoryService} from '../../services/subcatagory.service';

@Component({
  selector: 'app-catagory-knw',
  templateUrl: './catagory-knw.component.html',
  styleUrls: ['./catagory-knw.component.css']
})
export class CatagoryKnwComponent implements OnInit {

  constructor(private newsService:NewsService,
              private subcatagoryService:SubcatagoryService,
              private router : Router) { }

  recent:any[];
  technews:any[];

  ngOnInit() {
    this.newsService.getKnowladgeNews().subscribe((data:any)=>{
      this.recent=data.data;
      console.log(this.recent);
    })

    this.subcatagoryService.getTechNews().subscribe((data:any)=>{
      this.technews=data.data;
    })
  }


  moreDetail(item){
    // this.router.navigate([''])
    if(item.storySite!='Youtube'){
      this.router.navigate(['/news/'+item._id])
    }
    else{
      this.router.navigate(['/video/'+item._id])
    }
  }


}
