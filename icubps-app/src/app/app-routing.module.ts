import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
