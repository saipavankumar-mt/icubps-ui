import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselPauseComponent } from './utilities/carousel-pause/carousel-pause.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ContactUsComponent,
    CarouselPauseComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
