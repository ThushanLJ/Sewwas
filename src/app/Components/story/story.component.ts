import { Component, OnInit ,Input} from '@angular/core';
import {NewsService} from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private newsService:NewsService,
              private route: ActivatedRoute) { }

  @Input() storyId;
  arr:any[];
  private sub:any;
  type:string;

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.type=params['id'];
      console.log(this.type);
    });
    this.newsService.getNewsDetail(this.type).subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

}
