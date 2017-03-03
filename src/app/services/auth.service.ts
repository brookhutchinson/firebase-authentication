import { Injectable }                              from '@angular/core';

// firebase authentication
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(public af: AngularFire) {

  }

  loginWithGoogle() {
    return this.af.auth.login({
      // sign in provider
      provider: AuthProviders.Google,
      // sign in provider method
      method: AuthMethods.Popup
    });
  }

  logout() {
    return this.af.auth.logout();
  }
}