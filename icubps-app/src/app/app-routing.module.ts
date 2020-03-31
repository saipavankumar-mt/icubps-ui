import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { CustomTshirtsComponent } from './custom-tshirts/custom-tshirts.component';
import { CreateDesignComponent } from './create-design/create-design.component';

const routes: Routes = [
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signInSignUp', component: UserLoginComponent },
  { path: 'customTShirts', component: CustomTshirtsComponent },
  { path: 'photomugs', component: CreateDesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
