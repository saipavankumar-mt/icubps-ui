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

import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { UserLoginComponent } from './user-login/user-login.component';
import { CategoriesGridComponent } from './categories-grid/categories-grid.component';
import { CustomTshirtsComponent } from './custom-tshirts/custom-tshirts.component';
import { CardComponent } from './utilities/card/card.component';
import { FiltersComponent } from './utilities/filters/filters.component';
import { FilterComponent } from './utilities/filter/filter.component';
import { CreateDesignComponent } from './create-design/create-design.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ContactUsComponent,
    CarouselPauseComponent,
    HomeComponent,
    UserLoginComponent,
    CategoriesGridComponent,
    CustomTshirtsComponent,
    CardComponent,
    FiltersComponent,
    FilterComponent,
    CreateDesignComponent,
    StarRatingComponent,
    MiniCartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
