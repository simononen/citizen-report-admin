import { IDistrict, IDistricts, } from 'src/app/shared/interfaces/district/IDistrict';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllDistricts(url=''): Observable<IDistricts[]> {
    return this.http.get<IDistricts[]>(url ? url : `${this.apiUrl}/v1/districts`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
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
