// modules
import { Router }            from '@angular/router';

// components
import { Component, OnInit } from '@angular/core';

// services
import { AuthService }       from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {

  }

  ngOnInit() {

  }

  login() {
    // use AuthService to authenticate user and return promise
    this.authService.loginWithGoogle()
      // navigate user to default route
      .then( (data) => { this.router.navigate(['']) } );
  }
}