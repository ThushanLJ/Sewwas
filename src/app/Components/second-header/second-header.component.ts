import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.css']
})
export class SecondHeaderComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private router : Router) { }

  searchForm : FormGroup;

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search:[null, Validators.required]
    });
  }

  search(){
    if(this.searchForm.value!=""){
      this.router.navigate(['/search/'+this.searchForm.value.search]);
    }
  }

}
