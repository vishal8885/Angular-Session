import { Component, OnInit, Input } from '@angular/core';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent implements OnInit {
  @Input() showComponent: boolean;
  @Input() credential: Credentials;
  constructor() { }

  ngOnInit() {
  }

}
