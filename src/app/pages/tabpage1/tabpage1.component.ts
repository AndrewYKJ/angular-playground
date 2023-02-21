import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/model/movies/movies';


@Component({
  selector: 'app-tabpage1',
  templateUrl: './tabpage1.component.html',
  styleUrls: ['./tabpage1.component.scss'],
 
  
})
export class Tabpage1Component implements OnInit {

   constructor() {
   
  }
  @Input() list?: List[];
  ngOnInit(): void {
  }

}
