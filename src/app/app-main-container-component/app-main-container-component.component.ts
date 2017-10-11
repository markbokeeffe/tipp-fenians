import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-app-main-container-component',
  templateUrl: './app-main-container-component.component.html',
  styleUrls: ['./app-main-container-component.component.css']
})
export class AppMainContainerComponentComponent implements OnInit {
  buttonStatus='josephMaxey';

  myEvent(event){
    console.log(event);
  }

  myMouseEnterEvent(event){
    console.log(event);
  }

  titleClasses={
    'red-title':true,
    'large-title':true
  }

  someProperty:string = '';

  constructor(private dataService:DataService) {
  }

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

}
