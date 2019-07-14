import { Component, OnInit } from '@angular/core';
import {BlogService} from '../../services/blog.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-blog-story',
  templateUrl: './blog-story.component.html',
  styleUrls: ['./blog-story.component.css']
})
export class BlogStoryComponent implements OnInit {

  constructor(private blogService: BlogService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

    //@Input() storyId;
    arr:any;
    private sub:any;
    type:string;
    commentForm : FormGroup;
    isUser:boolean=true;
    url='';

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      text:[null, Validators.required],
      userid:[null],
      blogid:[null],
      username:[null],
      picture:[null]
    });

    this.sub=this.route.params.subscribe(params=>{
      this.type=params['id'];
      console.log(this.type);
      this.url=location.origin+'/news/'+this.type;
      console.log(this.url);
    });
    this.blogService.getBlog(this.type).subscribe((data:any)=>{
      this.arr=data.data;
      console.log(data.data);
    })
  }
  submitComment(){
    this.commentForm.value.userid = localStorage.getItem('sewwasUserId');
    this.commentForm.value.blogid = this.type;
    this.commentForm.value.username = localStorage.getItem('sewwasUserName');
    this.commentForm.value.picture = localStorage.getItem('sewwasPicture');
    console.log(this.commentForm.value);
    this.blogService.addComment(this.commentForm.value).subscribe((data:any)=>{
      console.log(data);
      if(data.success==true){
        window.location.reload();
      }
    },(err : HttpErrorResponse)=>{
      //
    })
  }

  addVote(){
    var user={
      'userid':localStorage.getItem('sewwasUserId'),
      'blogid':this.type,
      'username':localStorage.removeItem('sewwasUserName')
    }
    console.log(user)
    this.blogService.addVote(user).subscribe((data:any)=>{
      window.location.reload();
      console.log(data);
    },(err : HttpErrorResponse)=>{
      console.log(err);
    })
  }

}
