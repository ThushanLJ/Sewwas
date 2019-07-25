import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../Services/auth.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(private authService:AuthService) { }
  nav1;
  nav2;
  nav3;
  userData:any;

  ngOnInit() {
    this.nav1 = true;
    this.nav2 = false;
    this.nav3 = false;
    this.authService.getUserDetail().subscribe((data:any)=>{
      console.log(data.data);
      this.userData=data.data;
    })
  }

  Profile(){
    this.nav1 = true;
    this.nav2 = false;
    this.nav3 = false;
  }

  History(){
    this.nav1 = false;
    this.nav2 = true;
    this.nav3 = false;
  }

  Pins(){
    this.nav1 = false;
    this.nav2 = false;
    this.nav3 = true;
  }

}
