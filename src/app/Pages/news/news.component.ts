import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  private sub:any;
  type:string;
  id=1;

  ngOnInit() {
    // this.sub=this.route.params.subscribe(params=>{
    //   this.type=params['type'];
    //   console.log(this.type);
    // });
  }

}
