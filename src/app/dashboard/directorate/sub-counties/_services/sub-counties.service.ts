import { HttpClient } from '@angular/common/http';
import { ISubcounty } from 'src/app/shared/interfaces/subcounty/Subcounty';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubSubcountiesService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllSubcounties(url=''): Observable<ISubcounty[] | any> {
    return this.http.get<ISubcounty[]>(url ? url : `${this.apiUrl}/v1/sub-counties`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addSubcounty(county: ISubcounty): Observable<ISubcounty> {
    return this.http.post<ISubcounty>(`${this.apiUrl}/v1/sub-counties`, county)
    .pipe(
      // catchError(this.handleError('addSubcounty', ISubcountyPostData))
    );
  }

  updateSubcounty(id: number | string, county: ISubcounty): Observable<ISubcounty> {
    return this.http.put<ISubcounty>(`${this.apiUrl}/v1/sub-counties/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateSubcounty', ISubcountyPostData))
    );
  }

  getSubcountyById(id: number | string): Observable<ISubcounty>{
    return this.http.get<ISubcounty>(`${this.apiUrl}/v1/sub-counties/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteSubcounty(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/sub-counties/${id}`)
      .pipe(
        // catchError(this.handleError('deleteSubcounty'))
      );
  }
}
