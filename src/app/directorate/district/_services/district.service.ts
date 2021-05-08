import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

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
