import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../Services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-body-top',
  templateUrl: './new-body-top.component.html',
  styleUrls: ['./new-body-top.component.css']
})
export class NewBodyTopComponent implements OnInit {

  constructor(private newsService: NewsService,
              private router : Router) { }

  recent:any[];

  ngOnInit() {
    this.newsService.getLatestNews().subscribe((data: any) => {
      this.recent=data.data;
      console.log(data,"dataaaaaaaa");
    });
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
