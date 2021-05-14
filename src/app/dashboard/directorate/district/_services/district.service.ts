import { HttpClient, HttpParams } from '@angular/common/http';
import { IDistrict, IDistrictPostData, IDistricts, } from 'src/app/shared/interfaces/district/IDistrict';

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

  getAllDistricts(url='', val: string='') {
    const params = new HttpParams()
      .set('q', val);

    return this.http.get<IDistricts[]>(url ? url : `${this.apiUrl}/v1/districts`, {params}).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addDistrict(district: IDistrictPostData): Observable<IDistrictPostData> {
    return this.http.post<IDistrictPostData>(`${this.apiUrl}/v1/districts`, district)
    .pipe(
      // catchError(this.handleError('addDistrict', IDistrictPostData))
    );
  }

  updateDistrict(district: IDistrictPostData, id: number | string): Observable<IDistrictPostData> {
    return this.http.patch<IDistrictPostData>(`${this.apiUrl}/v1/districts/${id}`, district)
    .pipe(
      // catchError(this.handleError('updateDistrict', IDistrictPostData))
    );
  }

  getDistrictById(id: number | string): Observable<IDistrict>{
    return this.http.get<IDistrict>(`${this.apiUrl}/v1/districts/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteDistrict(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/districts/${id}`)
      .pipe(
        // catchError(this.handleError('deleteDistrict'))
      );
  }

}
