import {Component} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // constructor(private http: HttpClient) {}

  googleLogin() {
    // Google's OAuth 2.0 endpoint for requesting an access token
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth?';
    var stateUUID = crypto.randomUUID();
    var httpParams = new HttpParams()
      .set('client_id', '480303324452-49v0flvao7bpqjvn9o6d0b1pplnhne8o.apps.googleusercontent.com')
      .set('redirect_uri', 'http://localhost:4200/oauth-redirect')
      .set('response_type', 'token')
      .set('scope', 'email profile')
      .set('include_granted_scopes', 'true')
      .set('state', stateUUID);

    window.open(oauth2Endpoint + httpParams.toString(), "_self")
  }
}

