import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Practice1Component } from './practice1/practice1.component';
import { Practice2Component } from './practice2/practice2.component';
import { Practice3Component } from './practice3/practice3.component';
import { Practice4Component } from './practice4/practice4.component';
import { Practice5Component } from './practice5/practice5.component';

const routes: Routes = [
  { path: 'practice1', component: Practice1Component },
  { path: 'practice2', component: Practice2Component },
  { path: 'practice3', component: Practice3Component },
  { path: 'practice4', component: Practice4Component },
  { path: 'practice5', component: Practice5Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
