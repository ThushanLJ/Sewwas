import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.css']
})
export class SecondHeaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router : Router, private route : ActivatedRoute) { }

  searchForm : FormGroup;
  private sub:any;
  type:string;

  public title1;
  public title2;
  public title3;
  public title4;
  

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search:[null, Validators.required]
    });

    this.sub=this.route.params.subscribe(params=>{
      this.type=params['type'];
    });


    if(this.type == "knw"){
      this.title1 = "style1"
      this.title2 = "style2"
      this.title3 = "style1"
      this.title4 = "style1"
    }else if(this.type == "ent"){
      this.title1 = "style1"
      this.title2 = "style1"
      this.title3 = "style2"
      this.title4 = "style1"
    }else if(this.type == "inf"){
      this.title1 = "style1"
      this.title2 = "style1"
      this.title3 = "style1"
      this.title4 = "style2"
    }else{
      this.title1 = "style2"
      this.title2 = "style1"
      this.title3 = "style1"
      this.title4 = "style1"
    }
  }

  search(){
    if(this.searchForm.value!=""){
      this.router.navigate(['/search/'+this.searchForm.value.search]);
    }
  }


  knw(){
    this.title1 = "style1"
      this.title2 = "style2"
      this.title3 = "style1"
      this.title4 = "style1"
  }

  ent(){
    this.title1 = "style1"
      this.title2 = "style1"
      this.title3 = "style2"
      this.title4 = "style1"
  }

  inf(){
    this.title1 = "style1"
      this.title2 = "style1"
      this.title3 = "style1"
      this.title4 = "style2"
  }

  home(){
    this.title1 = "style2"
      this.title2 = "style1"
      this.title3 = "style1"
      this.title4 = "style1"
  }




}
