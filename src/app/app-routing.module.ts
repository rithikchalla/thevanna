import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteriorComponent } from './interior/interior.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'interior',
    component: InteriorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
