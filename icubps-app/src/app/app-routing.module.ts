import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ContactUsComponent } from "./contact-us/contact-us.component";
import { UserLoginComponent } from "./user-login/user-login.component";

const routes: Routes = [
  { path: "contactUs", component: ContactUsComponent },
  { path: "signInSignUp", component: UserLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
