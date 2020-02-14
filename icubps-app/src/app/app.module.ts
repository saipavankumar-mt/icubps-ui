import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CarouselPauseComponent } from './utilities/carousel-pause/carousel-pause.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './core/material.module';

import { FormsModule } from '@angular/forms';

import { UserLoginComponent } from './user-login/user-login.component';
import { CategoriesGridComponent } from './categories-grid/categories-grid.component';
import { CustomTshirtsComponent } from './custom-tshirts/custom-tshirts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ContactUsComponent,
    CarouselPauseComponent,
    HomeComponent,
    UserLoginComponent,
    CategoriesGridComponent,
    CustomTshirtsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    CustomMaterialModule,
    FormsModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
