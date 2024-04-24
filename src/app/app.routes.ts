import { Routes } from '@angular/router';
import {OauthRedirectComponent} from "./oauth-redirect/oauth-redirect.component";
import {LoginComponent} from "./login/login.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'oauth-redirect', component: OauthRedirectComponent },
  { path: '**', component: PagenotfoundComponent, pathMatch: "full" },
];
