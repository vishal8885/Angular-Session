import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Practice3Component } from './practice3.component';
import { HighlighterDirective } from './highlighter/highlighter.directive';
import { FaderDirective } from './fader/fader.directive';

@NgModule({
  declarations: [Practice3Component, HighlighterDirective, FaderDirective],
  imports: [
    CommonModule
  ],
  exports: [
    Practice3Component
  ],
})
export class Practice3Module { }
