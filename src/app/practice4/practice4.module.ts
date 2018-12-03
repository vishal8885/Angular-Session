import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Practice4Component } from './practice4.component';
import { LoginComponent } from './login/login.component';
import { CompareValidatorDirective } from './login/compare-validator/compare-validator.directive';

@NgModule({
  declarations: [Practice4Component, LoginComponent, CompareValidatorDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Practice4Component,
    LoginComponent
  ]
})
export class Practice4Module { }
