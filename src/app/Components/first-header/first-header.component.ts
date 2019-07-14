import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-first-header',
  templateUrl: './first-header.component.html',
  styleUrls: ['./first-header.component.css']
})
export class FirstHeaderComponent implements OnInit {

  myDate = new Date();
  date
  load:boolean=true;
  constructor() { 
    this.date=formatDate(this.myDate, 'yyyy/MM/dd', 'en');
  }

  ngOnInit() {
    if(localStorage.getItem('sewwasUserToken')==null ){
      this.load=false
    }
  }

}
