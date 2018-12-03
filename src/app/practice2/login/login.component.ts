import { Component, OnInit } from '@angular/core';
import { Credentials } from './credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = new Credentials('', '');
  showChild = false;
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.showChild = !this.showChild;
  }
}
