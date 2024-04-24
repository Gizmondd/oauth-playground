import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient, HttpClientModule, HttpErrorResponse} from "@angular/common/http";
import {KeyValuePipe} from "@angular/common";

@Component({
  selector: 'app-oauth-redirect',
  standalone: true,
  imports: [HttpClientModule, KeyValuePipe],
  templateUrl: './oauth-redirect.component.html',
  styleUrl: './oauth-redirect.component.css'
})
export class OauthRedirectComponent {
  accessToken: string = '';
  userData: userData = {email: "", email_verified: "", family_name: "", given_name: "", name: "", picture: "", sub: ""};

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const params = this.parseFragmentParams(fragment);
        this.accessToken = params['access_token']

        this.fetchGoogleAPI(this.accessToken)
      }
    });
  }

  parseFragmentParams(fragment: string): { [key: string]: string } {
    const params: { [key: string]: string } = {};
    const pairs = fragment.split('&');
    pairs.forEach((pair) => {
      const [key, value] = pair.split('=');
      if (key && value) {
        params[decodeURIComponent(key)] = decodeURIComponent(value);
      }
    });
    return params;
  }

  fetchGoogleAPI(accessToken: string) {
    this.http.get("https://www.googleapis.com/oauth2/v3/userinfo", { params: { access_token: accessToken } })
      .subscribe((response) => {
        this.userData = response as userData;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      })
  }

  protected readonly Object = Object;
}


interface userData {
  sub: string
  name: string
  given_name: string
  family_name: string
  picture: string
  email: string
  email_verified: string
}
