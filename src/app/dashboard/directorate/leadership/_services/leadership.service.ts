import { HttpClient } from '@angular/common/http';
import { ILeader } from 'src/app/shared/interfaces/leader/leader';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeadershipService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllLeaders(url=''): Observable<ILeader[] | any> {
    return this.http.get<ILeader[]>(url ? url : `${this.apiUrl}/v1/leaders`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addLeader(county: ILeader): Observable<ILeader> {
    return this.http.post<ILeader>(`${this.apiUrl}/v1/leaders`, county)
    .pipe(
      // catchError(this.handleError('addLeader', ILeaderPostData))
    );
  }

  updateLeader(id: number | string, county: ILeader): Observable<ILeader> {
    return this.http.patch<ILeader>(`${this.apiUrl}/v1/leaders/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateLeader', ILeaderPostData))
    );
  }

  getLeaderById(id: number | string): Observable<ILeader>{
    return this.http.get<ILeader>(`${this.apiUrl}/v1/leaders/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteLeader(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/leaders/${id}`)
      .pipe(
        // catchError(this.handleError('deleteLeader'))
      );
  }
}
