import { HttpClient } from '@angular/common/http';
import { IParish } from 'src/app/shared/interfaces/parish/parish';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParishService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllParishes(url=''): Observable<IParish[] | any> {
    return this.http.get<IParish[]>(url ? url : `${this.apiUrl}/v1/parishes`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addParish(county: IParish): Observable<IParish> {
    return this.http.post<IParish>(`${this.apiUrl}/v1/parishes`, county)
    .pipe(
      // catchError(this.handleError('addParish', IParishPostData))
    );
  }

  updateParish(id: number | string, county: IParish): Observable<IParish> {
    return this.http.patch<IParish>(`${this.apiUrl}/v1/parishes/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateParish', IParishPostData))
    );
  }

  getParishById(id: number | string): Observable<IParish>{
    return this.http.get<IParish>(`${this.apiUrl}/v1/parishes/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteParish(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/parishes/${id}`)
      .pipe(
        // catchError(this.handleError('deleteParish'))
      );
  }
}
