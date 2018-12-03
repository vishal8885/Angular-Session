import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Practice1Module } from './practice1/practice1.module';
import { Practice2Module } from './practice2/practice2.module';
import { Practice3Module } from './practice3/practice3.module';
import { Practice4Module } from './practice4/practice4.module';
import { Practice5Module } from './practice5/practice5.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Practice1Module,
    Practice2Module,
    Practice3Module,
    Practice4Module,
    Practice5Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
