import { IDistrict, IDistrictPostData, IDistricts, } from 'src/app/shared/interfaces/district/IDistrict';

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

  addDistrict(district: IDistrictPostData): Observable<IDistrictPostData> {
    return this.http.post<IDistrictPostData>(`${this.apiUrl}/v1/districts`, district)
    .pipe(
      // catchError(this.handleError('addHero', hero))
    );
  }

  update() {
    return;
  }

  show() {
    return;
  }


  deleteDistrict(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/districts/${id}`)
      .pipe(
        // catchError(this.handleError('deleteHero'))
      );
  }

}
