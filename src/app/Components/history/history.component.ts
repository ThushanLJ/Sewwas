import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NewsService} from '../../services/news.service'

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private newsService:NewsService,
              private router : Router) { }

  min = 0;
  max = 6;

  marked1= false
  marked2= true

  ///////////sample for the ngFor
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 7, name:'Flash'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ]
  history:any[];

  ngOnInit() {
    this.newsService.getUserHistory().subscribe((data:any)=>{
      console.log(data);
      this.history=data.data;
    })
  }


  NextPage(){

    if(this.max<this.history.length){
      this.min = this.min + 6;
      this.max = this.max + 6;
    }

    if(this.min == 0){
      this.marked1 = false
    }else{
      this.marked1 = true
    }

    if(this.max > this.history.length - 6){
      this.marked2 = false
    }else{
      this.marked2 = true
    }

    document.getElementById("searchword").focus();
  }

  PreviousPage(){
    if(this.min > 0){
      this.min = this.min - 6;
      this.max = this.max - 6;
    }

    if(this.min == 0){
      this.marked1 = false
    }else{
      this.marked1 = true
    }

    if(this.max > this.HEROES.length){
      this.marked2 = false
    }else{
      this.marked2 = true
    }
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
