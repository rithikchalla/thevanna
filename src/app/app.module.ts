import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InteriorComponent } from './interior/interior.component';
import { HomeComponent } from './home/home.component';
import { DividerModule } from 'primeng/divider';
import { MenubarModule } from 'primeng/menubar';
import { AboutComponent } from './about/about.component';
import { DetailImagesComponent } from './detail-images/detail-images.component';

@NgModule({
  declarations: [
    AppComponent,
    InteriorComponent,
    HomeComponent,
    AboutComponent,
    DetailImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DividerModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
