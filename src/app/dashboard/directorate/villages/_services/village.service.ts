import { HttpClient } from '@angular/common/http';
import { IVillage } from 'src/app/shared/interfaces/village/village';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VillageService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllVillages(url=''): Observable<IVillage[] | any> {
    return this.http.get<IVillage[]>(url ? url : `${this.apiUrl}/v1/villages`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addCounty(county: IVillage): Observable<IVillage> {
    return this.http.post<IVillage>(`${this.apiUrl}/v1/villages`, county)
    .pipe(
      // catchError(this.handleError('addCounty', IVillagePostData))
    );
  }

  updateCounty(id: number | string, county: IVillage): Observable<IVillage> {
    return this.http.patch<IVillage>(`${this.apiUrl}/v1/villages/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateCounty', IVillagePostData))
    );
  }

  getCountyById(id: number | string): Observable<IVillage>{
    return this.http.get<IVillage>(`${this.apiUrl}/v1/villages/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteCounty(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/villages/${id}`)
      .pipe(
        // catchError(this.handleError('deleteCounty'))
      );
  }
}
