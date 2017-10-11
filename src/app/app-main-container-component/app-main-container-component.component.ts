import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-app-main-container-component',
  templateUrl: './app-main-container-component.component.html',
  styleUrls: ['./app-main-container-component.component.css'],
  animations: [
    trigger('myAwesomeAnimation',[
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)', offset: .5}),
        style({opacity: 1, transform: 'translateY(0)', offset: 1}),
      ]))),
    ]),

  ]
})
export class AppMainContainerComponentComponent implements OnInit {
  buttonStatus='josephMaxey';

  myEvent(event){
    console.log(event);
  }

  myMouseEnterEvent(event){
    console.log(event);
  }

  state: string = 'small;'

  animateMe(){
    this.state = (this.state === 'small' ? 'large' : 'small');
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
