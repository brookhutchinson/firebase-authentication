// modules
import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { ConfiguredRouterModule } from './app.routing';
import { AngularFireModule }      from 'angularfire2';

// components
import { AppComponent }           from './app.component';
import { NavbarComponent }        from './components/navbar/navbar.component';
import { LoginComponent }         from './components/login/login.component';
import { HomeComponent }          from './components/home/home.component';

// services
import { AuthService }            from './services/auth.service';

// firebase config
import { firebaseConfig }         from './../environments/firebase.config';

@NgModule({
  // modules
  imports: [ BrowserModule, FormsModule, HttpModule, ConfiguredRouterModule, AngularFireModule.initializeApp(firebaseConfig) ],
  // components
  declarations: [ AppComponent, NavbarComponent, LoginComponent, HomeComponent ],
  // services
  providers: [ AuthService ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}