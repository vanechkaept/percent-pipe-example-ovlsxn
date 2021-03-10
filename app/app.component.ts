// #docregion
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  num1: number = 25;
  num2: number = 0.5;
  constructor() {

  }

}