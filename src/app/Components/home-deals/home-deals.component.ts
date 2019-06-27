import { Component, OnInit } from '@angular/core';

import { SubcatagoryService } from '../../services/subcatagory.service'

@Component({
  selector: 'app-home-deals',
  templateUrl: './home-deals.component.html',
  styleUrls: ['./home-deals.component.css']
})
export class HomeDealsComponent implements OnInit {

  constructor(private subcatagoryService: SubcatagoryService) { }

  allDeals: any;

  ngOnInit() {

    this.subcatagoryService.getDeals().subscribe((data: any) => {
      this.allDeals = data.data;

      console.log(this.allDeals)
    })
  }

}
