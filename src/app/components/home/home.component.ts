// modules
import { Router }            from '@angular/router';

// components
import { Component, OnInit } from '@angular/core';

// servies
import { AuthService }       from '../../services/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }

  logout() {
    // use AuthService and Firebase Authentication Service to logout user
    this.authService.logout();

    // use router to navigate user to login route
    this.router.navigate(['login']);
  }
}