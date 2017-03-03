// modules
import { ModuleWithProviders }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { HomeComponent }        from './components/home/home.component';
import { LoginComponent }       from './components/login/login.component';

// define routes
const appRoutes: Routes = [
  // home route
  { path: '', component: HomeComponent },
  // login route
  { path: 'login', component: LoginComponent }
];

// export configured router module
export const ConfiguredRouterModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);