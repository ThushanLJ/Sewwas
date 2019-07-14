import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BlogService} from '../../services/blog.service';

@Component({
  selector: 'app-read-list',
  templateUrl: './read-list.component.html',
  styleUrls: ['./read-list.component.css']
})
export class ReadListComponent implements OnInit {

  constructor(private blogService: BlogService,
    private router : Router) { }

  blogs:any[];
  min: number = 0
  max: number = 12
  max_temp = this.min + 6

  page = 1


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
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
];

///////////////////////////////

  ngOnInit() {
       this.blogService.getrecentBlog().subscribe((data:any)=>{
         console.log(data);
         this.blogs=data.data;
       })
    console.log(this.HEROES.length);
    
  }

  nextPage(){
    if(this.max< this.blogs.length){
    this.min = this.min + 12;
      if(this.max + 12 <= this.blogs.length){
        this.max = this.max + 12;
      }else{
        this.max = this.blogs.length
      }

    this.max_temp = this.min + 6
    this.page++;
    }
  }

  previousPage(){
    if(this.min!= 0){
    this.min = this.min - 12;
    if(this.max != this.blogs.length){
      this.max = this.max - 12;
    }else{
      this.max = this.min + 12
    }
    this.max_temp = this.min + 6
    this.page--;
    }
  }

  SeeMore(){
    if(this.max_temp < this.max){
      this.max_temp = this.max_temp +6 ;
    }
  }
  moreDetail(item){
    // this.router.navigate([''])
    this.router.navigate(['/blogStory/'+item._id])
  }
}
