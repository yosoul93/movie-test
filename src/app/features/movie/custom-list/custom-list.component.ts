import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss']
})
export class CustomListComponent implements OnInit {

  @Input() customs!: any[];
  imgUrl: string = environment.imgUrl;
  
  constructor() { }

  ngOnInit(): void {
  }

}
