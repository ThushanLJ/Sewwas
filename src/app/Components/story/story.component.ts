import { Component, OnInit ,Input} from '@angular/core';
import {NewsService} from '../../services/news.service';
import { ActivatedRoute } from '@angular/router';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  constructor(private newsService:NewsService,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder) { }

              
  closed=false;
  show1=false;

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
      newsid:[null],
      username:[null],
      picture:[null]
    });

    this.sub=this.route.params.subscribe(params=>{
      this.type=params['id'];
      console.log(this.type);
      this.url=location.origin+'/news/'+this.type;
      console.log(this.url);
      //console.log(location.origin)
    });
    // this.newsService.getNewsDetail(this.type).subscribe((data:any)=>{
    //   this.arr=data.data;
    //   console.log(this.arr);
    // })

    this.newsService.getNewsWithUserId(this.type).subscribe((data:any)=>{
      // console.log(data.data);
       this.arr=data.data;
       console.log(this.arr);
    })

    
  }

  submitComment(){
    if(localStorage.getItem('sewwasUserName')!=null){
    this.commentForm.value.userid = localStorage.getItem('sewwasUserId');
    this.commentForm.value.newsid = this.type;
    this.commentForm.value.username = localStorage.getItem('sewwasUserName');
    this.commentForm.value.picture = localStorage.getItem('sewwasPicture');
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
  else{
    this.show1=true
    this.closed=false
  }
}

  addVote(){
    if(localStorage.getItem('sewwasUserName')!=null){
    var user={
      'userid':localStorage.getItem('sewwasUserId'),
      'newsid':this.type,
      'username':localStorage.removeItem('sewwasUserName')
    }
    console.log(user)
    this.newsService.addNewsVote(user).subscribe((data:any)=>{
      window.location.reload();
      console.log(data);
    },(err : HttpErrorResponse)=>{
      console.log(err);
    })
  }

  else{
    this.show1=true
    this.closed=false
  }
  }

  close(){
    this.closed=true
    this.show1=false
   }

}
