import { HttpClient } from '@angular/common/http';
import { IHistoryLesson } from 'src/app/shared/interfaces/history-lessons/history-lesson';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryLessonService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllHistoryLessons(url=''): Observable<IHistoryLesson[] | any> {
    return this.http.get<IHistoryLesson[]>(url ? url : `${this.apiUrl}/v1/history-lessons`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addHistoryLesson(historyLesson: IHistoryLesson): Observable<IHistoryLesson> {
    return this.http.post<IHistoryLesson>(`${this.apiUrl}/v1/history-lessons`, historyLesson)
    .pipe(
      // catchError(this.handleError('addHistoryLesson', IHistoryLessonPostData))
    );
  }

  updateHistoryLesson(id: number | string, historyLesson: IHistoryLesson): Observable<IHistoryLesson> {
    return this.http.patch<IHistoryLesson>(`${this.apiUrl}/v1/history-lessons/${id}`, historyLesson)
    .pipe(
      // catchError(this.handleError('updateHistoryLesson', IHistoryLessonPostData))
    );
  }

  getHistoryLessonById(id: number | string): Observable<IHistoryLesson>{
    return this.http.get<IHistoryLesson>(`${this.apiUrl}/v1/history-lessons/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteHistoryLesson(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/history-lessons/${id}`)
      .pipe(
        // catchError(this.handleError('deleteHistoryLesson'))
      );
  }
}
