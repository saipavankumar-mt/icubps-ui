import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MatIconModule } from "@angular/material/icon";

import { CustomMaterialModule } from "./core/material.module";

import { FormsModule } from "@angular/forms";

import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { UserLoginComponent } from "./user-login/user-login.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    ContactUsComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatIconModule,
    CustomMaterialModule,
    FormsModule
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
