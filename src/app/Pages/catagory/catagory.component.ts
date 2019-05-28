import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catagory',
  templateUrl: './catagory.component.html',
  styleUrls: ['./catagory.component.css']
})
export class CatagoryComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  private sub:any;
  type:string;

  ngOnInit() {
    this.sub=this.route.params.subscribe(params=>{
      this.type=params['type'];
    });
  }

}
