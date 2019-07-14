import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NewsService} from '../../services/news.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-catagory-search',
  templateUrl: './catagory-search.component.html',
  styleUrls: ['./catagory-search.component.css']
})
export class CatagorySearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private newsService:NewsService,
              private router : Router) { }

  private sub:any;
  text:string;
  news:any[];

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

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.text=params['text'];
      console.log(this.text);
    });

    this.newsService.getSeaarchResult(this.text).subscribe((data:any)=>{
      this.news=data.data;
      console.log(this.news);
    })
  }


  NextPage(){

    if(this.max<this.news.length){
      this.min = this.min + 6;
      this.max = this.max + 6;
    }

    if(this.min == 0){
      this.marked1 = false
    }else{
      this.marked1 = true
    }

    if(this.max > this.news.length - 6){
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
