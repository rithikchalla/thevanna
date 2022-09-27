import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InteriorComponent } from './interior/interior.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailImagesComponent } from './detail-images/detail-images.component';

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
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'detail_images',
    component: DetailImagesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
