import { Component, OnInit ,Input} from '@angular/core';
import {NewsService} from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private newsService:NewsService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

  @Input() storyId;
  arr:any[];
  private sub:any;
  type:string;
  commentForm : FormGroup;

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      text:[null, Validators.required],
      userid:[null],
      newsid:[null],
    });

    this.sub=this.route.params.subscribe(params=>{
      this.type=params['id'];
      console.log(this.type);
    });
    this.newsService.getNewsDetail(this.type).subscribe((data:any)=>{
      this.arr=data.data;
      console.log(this.arr);
    })
  }

  submitComment(){
    this.commentForm.value.userid = localStorage.getItem('sewwasUserId');
    this.commentForm.value.newsid = this.type;
    console.log(this.commentForm.value);
    this.newsService.addComment(this.commentForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.success==true){
        window.location.reload();
      }
    },(err : HttpErrorResponse)=>{
      //
    })
  }

}
