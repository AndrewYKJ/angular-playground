import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {

  constructor(
  ) {
  
  };

  viewMore: boolean = false;

  ngOnInit(): void {
   
  }

  changeViewState() {
    this.viewMore = !this.viewMore;

   
  }

 
}
