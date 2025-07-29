import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgFor,NgClass, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router:Router){}
  username:string = "user"
  isNavOpen:boolean = true;
  navLinks = [
    {
      linkHref: "Home",
      iconValue: "home"
    },
    {
      linkHref: "Dashboard",
      iconValue: "space_dashboard"
    },
    {
      linkHref: "Admin",
      iconValue: "person"
    },
    {
      linkHref: "Message",
      iconValue: "chat"
    },
    {
      linkHref: "Settings",
      iconValue: "settings"
    }
  ];

  toggleNav(){
    this.isNavOpen = !this.isNavOpen;
  }

  logOut(){
    // Chamar service auth
    this.router.navigate(['/login'])
  }
}
