import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import {NewsService} from '../../services/news.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer,
              private route: ActivatedRoute,
              private newsService:NewsService) { }

  videoId='https://www.youtube.com/embed/videoseries?list=';
  private sub:any;
  type:string;
  arr:any;
  videoUrl:any;
  video='https://www.youtube.com/embed/';

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.type=params['id'];
      console.log(this.type);
    });

    this.newsService.getNewsWithUserId(this.type).subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
      if(this.arr.storySubCategory=="teledrama"){
        this.videoId=this.videoId+this.arr.storyTextUrl;
      }
      else{
        this.videoUrl=this.arr.storyTextUrl.split("?v=");
        this.video=this.video+this.videoUrl[1];
        this.videoId=this.video;
      }
    });
  }

  videoReturn(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoId);
  }

}
