import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {SubcatagoryService} from '../../services/subcatagory.service';
import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-catagory-ent',
  templateUrl: './catagory-ent.component.html',
  styleUrls: ['./catagory-ent.component.css']
})
export class CatagoryEntComponent implements OnInit {

  constructor(private subcatagoryService:SubcatagoryService,
              private newsService:NewsService,
              private router : Router) { }

  teledrama:any[];
  music:any[];
  sport:any[];
  recent:any[];
  comedy:any[];
  gossip:any[];
  travel:any[];

  ngOnInit() {
    this.subcatagoryService.getTeledramas().subscribe((data:any)=>{
      this.teledrama=data.data;
      //console.log(this.teledrama);
    });

    this.subcatagoryService.getMusicVideos().subscribe((data:any)=>{
      this.music = data.data;
    });

    this.subcatagoryService.getSportNews().subscribe((data:any)=>{
      this.sport = data.data;
      //console.log(this.sport);
    });

    this.newsService.getEntertainmentNews().subscribe((data:any)=>{
      this.recent = data.data;
      console.log(this.recent);
    })

    this.subcatagoryService.getComedyVideos().subscribe((data:any)=>{
      this.comedy = data.data;
      //console.log(this.comedy);
    })

    this.subcatagoryService.getGossipNews().subscribe((data:any)=>{
      this.gossip=data.data;
      //console.log(this.gossip)
    })

    this.subcatagoryService.getTravalVideo().subscribe((data:any)=>{
      this.travel=data.data;
      //console.log(this.travel);
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
