import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {

  constructor(
    private newsService: NewsService
  ) { }

  knwArray:any[];
  entArray:any[];
  infArray:any[];
  latestArray:any[];

  ngOnInit() {

    document.getElementById('svg').classList.add('animate');

    setTimeout(function () {
      document.getElementById('svg').classList.remove('animate');
      document.getElementById('loading-container').classList.add('loaded');
    }, 7000);

    setTimeout(function () {
      document.getElementById('svg').classList.add('animate');

      var header = document.getElementById("header");
      header.setAttribute("class", "active");
      var container2 = document.getElementById("container2");
      container2.setAttribute("class", "container2 active");
    }, 10000);


    this.newsService.getKnowladgeNews().subscribe((data:any)=>{
      this.knwArray=data.data;
      console.log(this.knwArray,"getKnowladgeNews");
    })

    this.newsService.getInfomationNews().subscribe((data:any)=>{
      this.infArray=data.data;
      console.log(this.infArray,"getInfomationNews");
    })

    this.newsService.getEntertainmentNews().subscribe((data:any)=>{
      this.entArray=data.data;
      console.log(this.entArray,"getEntertainmentNews");
    })

    this.newsService.getLatestNews().subscribe((data:any)=>{
      this.latestArray=data.data;
      console.log(this.latestArray,"getLatestNews");
    })
  }

}
