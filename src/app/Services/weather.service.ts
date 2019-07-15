import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  weatherbitURL="https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&";

  getWeatherDetail(lon,lat){
    // let headers = new Headers();
    // headers.append("X-RapidAPI-Host", "weatherbit-v1-mashape.p.rapidapi.com");
    // headers.append("X-RapidAPI-Key", "a2829662b6mshb2c219c527ee564p1cb1b1jsn4fe82da61fc8");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com',
        'X-RapidAPI-Key': 'a2829662b6mshb2c219c527ee564p1cb1b1jsn4fe82da61fc8'
      })
    };
    let url=this.weatherbitURL+"lon="+lon+"&lat="+lat;
    return this.http.get(url,httpOptions);
  }
}
