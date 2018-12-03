import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice3',
  templateUrl: './practice3.component.html',
  styleUrls: ['./practice3.component.css']
})
export class Practice3Component implements OnInit {
  current: string;
  highlighted: HTMLElement;
  constructor() { }

  ngOnInit() {
  }

  change(value: string) {
    this.current = value;
  }

  changeElement(element: HTMLElement) {
    this.highlighted = element;
  }
}
