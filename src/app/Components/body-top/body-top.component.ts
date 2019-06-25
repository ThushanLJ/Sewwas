import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-body-top',
  templateUrl: './body-top.component.html',
  styleUrls: ['./body-top.component.css']
})
export class BodyTopComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  newsArray = [];
  load:any=false;

  headStoryArrayOne = [];
  headStoryArrayTwo = [];
  thirdArray = [];
  headStoryArrayThree = [];

  ngOnInit() {


    this.newsService.getLatestNews().subscribe((data: any) => {
      this.newsArray = data.data;
      this.load=true
      console.log(this.newsArray,"full");
      // for (var a = 0; a < 1; a++) {
      //   this.headStoryArrayOne.push(this.newsArray[a]);
      //   console.log(this.headStoryArrayOne,"one");
      // }
      // for (var a = 1; a < 2; a++) {
      //   this.headStoryArrayTwo.push(this.newsArray[a]);
      //   console.log(this.headStoryArrayTwo,"two");
      // }
      // for (var a = 6; a < 9; a++) {
      //   this.thirdArray.push(this.newsArray[a]);
      //   console.log(this.thirdArray);
      // }
    });

  }





  
}
