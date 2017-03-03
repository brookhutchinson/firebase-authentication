// modules
import { NgModule }          from '@angular/core';
import { BrowserModule }     from '@angular/platform-browser';
import { FormsModule }       from '@angular/forms';
import { HttpModule }        from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// components
import { AppComponent }      from './app.component';

// services
import { AuthService }       from './services/auth.service';

// firebase config
import { firebaseConfig }    from './../environments/firebase.config';

@NgModule({
  // modules
  imports: [ BrowserModule, FormsModule, HttpModule, AngularFireModule.initializeApp(firebaseConfig) ],
  // components
  declarations: [ AppComponent ],
  // services
  providers: [ AuthService ],
  // bootstrap
  bootstrap: [ AppComponent ]
})
export class AppModule {}