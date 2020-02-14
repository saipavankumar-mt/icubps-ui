import { Component, Inject } from "@angular/core";

import { MatDialog } from "@angular/material/dialog";

import { UserLoginComponent } from "../user-login/user-login.component";

@Component({
  selector: "app-nav-menu",
  templateUrl: "./nav-menu.component.html",
  styleUrls: ["./nav-menu.component.css"]
})
export class NavMenuComponent {
  isExpanded = false;
  constructor(public dialog: MatDialog) {}

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  openLoginPage(): void {
    const loginRef = this.dialog.open(UserLoginComponent, {
      width: "450px",
      height: "500px"
    });
    loginRef.afterClosed().subscribe(() => {
      console.log("The dialog was closed");
    });
  }
}
