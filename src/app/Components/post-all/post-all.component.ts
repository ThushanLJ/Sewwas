import { BlogService } from './../../Services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.css']
})
export class PostAllComponent implements OnInit {

  constructor( private blogService: BlogService) { }

  min = 0;
  max = 6;
  blogArray:any[];

  ngOnInit() {
    this.blogService.getUserBlog().subscribe((data:any)=>{
      this.blogArray=data.data;
      console.log(this.blogArray,"userblogs")
    })
  }

   ///////////sample for the ngFor
   HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 7, name:'Flash'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 7, name:'Flash'}
];

///////////////////////////////


}
