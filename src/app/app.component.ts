// modules
import { Router }      from '@angular/router';

// components
import { Component }   from '@angular/core';

// services
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define properties
  private isLoggedIn: Boolean;
  private userDisplayName: String;
  private userDisplayEmail: String;

  constructor(public authService: AuthService, private router: Router) {
     // check authentication status of user
     this.authService.af.auth.subscribe(
       (auth) => {
         // check authentication
         if (auth == null) {
           // user is not logged in, not authenticated

           // set properties
           this.isLoggedIn = false;
           this.userDisplayName = '';
           this.userDisplayEmail = '';

           // use router to navigate user to login route
           this.router.navigate(['login']);
         } else {
           // user is logged in, authenticated

           // set properties
           this.isLoggedIn = true;
           this.userDisplayName = auth.google.displayName;
           this.userDisplayEmail = auth.google.email;

           // use router to navigate user to home route
           this.router.navigate(['']);
         }
       }
     );
  }
}