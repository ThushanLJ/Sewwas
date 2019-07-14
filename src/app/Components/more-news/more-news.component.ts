import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css']
})
export class MoreNewsComponent implements OnInit {

  constructor(private newsService:NewsService,
              private route: ActivatedRoute,
              private router : Router) { }

  private sub:any;
  type:string;

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.type=params['type'];
      console.log(this.type);
    });

    this.newsService.getPagination(1,this.type).subscribe((data:any)=>{
      console.log(data);
      this.collection=data.data;
    })
  }

  p: number = 1;
  collection: object[];
  // collection: object[] = [{ id: 1, title: 'Widget 1'},
  //               { id: 2, title: 'Widget 1'},
  //               { id: 3, title: 'Widget 12'},
  //               { id: 4, title: 'Widget 123'},
  //               { id: 5, title: 'Widget 1'},
  //               { id: 6, title: 'Widget 1'},
  //               { id: 7, title: 'Widget 1'},
  //               { id: 8, title: 'Widget 1'},
  //               { id: 9, title: 'Widget 1'},
  //               { id: 10, title: 'Widget 1'},
  //               { id: 10, title: 'Widget 10'}];
  //collection = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  c:object[] =[{ id: 1, title: 'Widget 123'},
               { id: 1, title: 'Widget 1234'},
               { id: 1, title: 'Widget 1235'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'},
               { id: 1, title: 'Widget 1'}];
  test: any[] = [];

  onpageChange(event){
    console.log(event);
    //this.p=event;
    //console.log(this.p);
    if(event>this.p){
      // this.c.forEach(element => {
      //   this.collection.push(element);
      // });
      this.newsService.getPagination(event,this.type).subscribe((data:any)=>{
        console.log(data);
        //this.collection=data.data;
        data.data.forEach(element => {
          this.collection.push(element);
        });
      })
      this.p=event;
    }
    else{
      this.p=event;
    }
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
