import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  load:boolean=true;

  ngOnInit() {
    if(localStorage.getItem('sewwasUserToken')==null ){
      this.load=false;
    }
  }

}
