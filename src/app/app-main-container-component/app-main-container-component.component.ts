import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
