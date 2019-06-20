import { Component, OnInit } from '@angular/core';

import {NewsService} from '../../services/news.service';
import {SubcatagoryService} from '../../services/subcatagory.service';

@Component({
  selector: 'app-catagory-knw',
  templateUrl: './catagory-knw.component.html',
  styleUrls: ['./catagory-knw.component.css']
})
export class CatagoryKnwComponent implements OnInit {

  constructor(private newsService:NewsService,
              private subcatagoryService:SubcatagoryService) { }

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

}
