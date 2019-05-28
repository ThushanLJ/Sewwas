import { NewsService } from './../../Services/news.service';
import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml'
})
export class SafeHtmlPipe implements PipeTransform {
 
  constructor(private sanitizer: DomSanitizer) {
  }
 
  transform(value: any, args?: any): any {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
 
}

@Component({
  selector: 'app-body-top',
  templateUrl: './body-top.component.html',
  styleUrls: ['./body-top.component.css']
})
export class BodyTopComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  newsArray = [];

  headStoryArrayOne = [];
  headStoryArrayTwo = [];
  thirdArray = [];
  headStoryArrayThree = [];

  ngOnInit() {


    this.newsService.getLatestNews().subscribe((data: any) => {
      this.newsArray = data.data;
      console.log(this.newsArray,"full");
      for (var a = 0; a < 1; a++) {
        this.headStoryArrayOne.push(this.newsArray[a]);
        console.log(this.headStoryArrayOne,"one");
      }
      for (var a = 1; a < 2; a++) {
        this.headStoryArrayTwo.push(this.newsArray[a]);
        console.log(this.headStoryArrayTwo,"two");
      }
      for (var a = 6; a < 9; a++) {
        this.thirdArray.push(this.newsArray[a]);
        console.log(this.thirdArray);
      }
    });

  }





  
}
