import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pins',
  templateUrl: './pins.component.html',
  styleUrls: ['./pins.component.css']
})
export class PinsComponent implements OnInit {

  constructor() { }

  min = 0;
  max = 6;

  marked1= false
  marked2= true

  ///////////sample for the ngFor
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'},
    {id: 6, name:'Flash'},
    {id: 7, name:'Flash'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ]

  ngOnInit() {
  }


  NextPage(){

    if(this.max<this.HEROES.length){
      this.min = this.min + 6;
      this.max = this.max + 6;
    }

    if(this.min == 0){
      this.marked1 = false
    }else{
      this.marked1 = true
    }

    if(this.max > this.HEROES.length - 6){
      this.marked2 = false
    }else{
      this.marked2 = true
    }

    document.getElementById("searchword").focus();
  }

  PreviousPage(){
    if(this.min > 0){
      this.min = this.min - 6;
      this.max = this.max - 6;
    }

    if(this.min == 0){
      this.marked1 = false
    }else{
      this.marked1 = true
    }

    if(this.max > this.HEROES.length){
      this.marked2 = false
    }else{
      this.marked2 = true
    }
  }


}
