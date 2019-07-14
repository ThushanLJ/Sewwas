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


  ngOnInit() {
  }

  ReadingList(){
      this.marked1 = true
      this.marked2 = false
      this.marked3 = false
      this.marked4 = false
  }

  Comment(){
      this.marked1 = false
      this.marked2 = true
      this.marked3 = false
      this.marked4 = false
  }

  Post(){
      this.marked1 = false
      this.marked2 = false
      this.marked3 = true
      this.marked4 = false
  }

  NewPost(){
      if(localStorage.getItem('sewwasUserName')!=null){
        this.marked1 = false
        this.marked2 = false
        this.marked3 = false
        this.marked4 = true
    }
    else{
        //
    }
  }

}
