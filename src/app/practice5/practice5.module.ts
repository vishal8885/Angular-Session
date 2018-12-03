import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Practice5Component } from './practice5.component';

@NgModule({
  declarations: [Practice5Component],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    Practice5Component
  ]
})
export class Practice5Module { }
