import { MatIconModule } from '@angular/material/icon';
import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth/auth.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-home',
  imports: [NgFor, NgClass, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  username: string = 'user';
  isNavOpen: boolean = true;
  navLinks = [
    {
      linkHref: 'Home',
      iconValue: 'home',
    },
    {
      linkHref: 'Dashboard',
      iconValue: 'space_dashboard',
    },
    {
      linkHref: 'Admin',
      iconValue: 'person',
    },
    {
      linkHref: 'Message',
      iconValue: 'chat',
    },
    {
      linkHref: 'Settings',
      iconValue: 'settings',
    },
  ];

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  logOut() {
    // Chamar service auth
    this.auth.logOutAccount();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    const decodeToken: any = jwtDecode(this.auth.getLocalData());
    this.username = decodeToken.username;
  }
}
