import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.css']
})
export class NewHeaderComponent implements OnInit {

  constructor() { }

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
    }, 10000);
  }

}
