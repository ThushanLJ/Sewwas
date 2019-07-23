import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory-blog',
  templateUrl: './catagory-blog.component.html',
  styleUrls: ['./catagory-blog.component.css']
})
export class CatagoryBlogComponent implements OnInit {

  constructor() { }

  marked1= true;
  marked2=false;
  marked3 =false;
  marked4=false;
  marked5=false;
  marked6=false;

  closed=false;
  show1=false;

  ngOnInit() {
  }

  ReadingList(){
      this.marked1 = true
      this.marked2 = false
      this.marked3 = false
      this.marked4 = false
      this.marked5 = false
      this.marked6 = false
  }

  KnowledgeList(){
    this.marked1 = false
    this.marked2 = true
    this.marked3 = false
    this.marked4 = false
    this.marked5 = false
    this.marked6 = false
  }

  EntertainmentList(){
    this.marked1 = false
    this.marked2 = false
    this.marked3 = true
    this.marked4 = false
    this.marked5 = false
    this.marked6 = false
  }

  InformationList(){
    this.marked1 = false
    this.marked2 = false
    this.marked3 = false
    this.marked4 = true
    this.marked5 = false
    this.marked6 = false
  }

  Post(){
    this.marked1 = false
    this.marked2 = false
    this.marked3 = false
    this.marked4 = false
    this.marked5 = true
    this.marked6 = false
  }
   close(){
    this.closed=true
    this.show1=false
   }
  NewPost(){
      if(localStorage.getItem('sewwasUserName')!=null){
        this.marked1 = false
        this.marked2 = false
        this.marked3 = false
        this.marked4 = false
        this.marked5 = false
        this.marked6 = true
    }
    else{
        this.show1=true
        this.closed=false
    }
  }
//code for login




}
