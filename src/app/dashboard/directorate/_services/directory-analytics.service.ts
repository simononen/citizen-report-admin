import { HttpClient } from '@angular/common/http';
import { IDirectorate } from 'src/app/shared/interfaces/directorate/directorate';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DirectoryAnalyticsService {

  private readonly apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAnalyticsSummary(): Observable<IDirectorate> {
    return this.http.get<IDirectorate>(`${this.apiUrl}/v1/analytics-summary/directorate`).pipe(
      tap(data => {
        console.log('Dirctorate Data', data);
      }),
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
