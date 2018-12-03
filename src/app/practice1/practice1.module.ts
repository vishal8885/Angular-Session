import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Practice1Component } from './practice1.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';


@NgModule({
  declarations: [Practice1Component,
    SuccessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    Practice1Component
  ]
})
export class Practice1Module { }
