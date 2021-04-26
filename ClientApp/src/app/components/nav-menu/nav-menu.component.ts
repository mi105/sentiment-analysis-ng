import { Component,  Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  constructor(public auth: AuthService, @Inject(DOCUMENT) public document: Document) { }
 
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  logout(){
    alert("url:/"+document.location.origin);
    this.auth.logout({ returnTo: document.location.origin });
    alert("logOut");
  }
}
