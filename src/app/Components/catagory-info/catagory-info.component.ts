import { SubcatagoryService } from './../../Services/subcatagory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catagory-info',
  templateUrl: './catagory-info.component.html',
  styleUrls: ['./catagory-info.component.css']
})
export class CatagoryInfoComponent implements OnInit {

  constructor(private subCategoryService: SubcatagoryService) { }

  newArray: any[];
  bizNewsArray: any[];
  newsVideoArray: any[];

  ngOnInit() {
    this.subCategoryService.getInformationCategory().subscribe((data: any) => {
      this.newArray = data.data;
      console.log(this.newArray, "hot");
    });

    this.subCategoryService.getBizNews().subscribe((data: any) => {
      this.bizNewsArray = data.data;
      console.log(this.bizNewsArray, "bizNews");
    })

    this.subCategoryService.getNewsVideos().subscribe((data: any) => {
      console.log(data,"newsVideoArray")
      this.newsVideoArray = data.data;
      console.log(this.newsVideoArray, "newsVideoArray");
    });
  }

}
