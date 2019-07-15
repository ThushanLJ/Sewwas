import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import {WeatherService} from '../../services/weather.service'

@Component({
  selector: 'app-first-header',
  templateUrl: './first-header.component.html',
  styleUrls: ['./first-header.component.css']
})
export class FirstHeaderComponent implements OnInit {

  myDate = new Date();
  date
  load: boolean = true;
  location: any;
  weather:any;
  constructor(private weatherService:WeatherService) {
    this.date = formatDate(this.myDate, 'yyyy/MM/dd', 'en');
  }

  ngOnInit() {
    if (localStorage.getItem('sewwasUserToken') == null) {
      this.load = false
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.location = position.coords
        console.log(position.coords);
        this.weatherService.getWeatherDetail(position.coords.longitude,position.coords.latitude).subscribe((data:any)=>{
          console.log(data.data);
          this.weather=data.data;
        })
      });
      
    } else {
      console.log("Geolocation is not supported by this browser.");
      //x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }


}
