import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-component',
  templateUrl: './head-component.component.html',
  styleUrls: ['./head-component.component.css']
})
export class HeadComponentComponent implements OnInit {
  angularLogo = 'http://angular.io/assets/images/logos/angular/angular.svg';
  titleStyles = {
    'color':'red',
    'font-size':'4em'
  }
  titleClass = true;
  constructor() { }

  ngOnInit() {
  }

}
