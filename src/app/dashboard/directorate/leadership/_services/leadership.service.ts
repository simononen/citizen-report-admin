import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeadershipService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  get() {
    return this.http.get(this.apiUrl);
  }

  post() {
    return;
  }

  update() {
    return;
  }

  show() {
    return;
  }

  delete() {
    return;
  }
}
