import { HttpClient } from '@angular/common/http';
import { ICounty } from 'src/app/shared/interfaces/county/County';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }


  getAllCounties(url=''): Observable<ICounty[] | any> {
    return this.http.get<ICounty[]>(url ? url : `${this.apiUrl}/v1/counties`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addCounty(county: ICounty): Observable<ICounty> {
    return this.http.post<ICounty>(`${this.apiUrl}/v1/counties`, county)
    .pipe(
      // catchError(this.handleError('addCounty', ICountyPostData))
    );
  }

  updateCounty(id: number | string, county: ICounty): Observable<ICounty> {
    return this.http.patch<ICounty>(`${this.apiUrl}/v1/counties/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateCounty', ICountyPostData))
    );
  }

  getCountyById(id: number | string): Observable<ICounty>{
    return this.http.get<ICounty>(`${this.apiUrl}/v1/counties/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteCounty(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/counties/${id}`)
      .pipe(
        // catchError(this.handleError('deleteCounty'))
      );
  }
}
