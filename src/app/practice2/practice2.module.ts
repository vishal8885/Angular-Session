import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Practice2Component } from './practice2.component';
import { LoginComponent } from './login/login.component';
import { LoginChildComponent } from './login/login-child/login-child.component';

@NgModule({
  declarations: [Practice2Component,
  LoginComponent,
  LoginChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Practice2Component
  ]
})
export class Practice2Module { }
