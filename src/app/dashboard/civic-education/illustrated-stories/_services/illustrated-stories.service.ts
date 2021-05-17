import { HttpClient } from '@angular/common/http';
import { IIllustratedStory } from 'src/app/shared/interfaces/illustrated-stories/illustrated-stories';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IllustratedStoriesService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllIllustratedStories(url=''): Observable<IIllustratedStory[] | any> {
    return this.http.get<IIllustratedStory[]>(url ? url : `${this.apiUrl}/v1/illustrated-stories`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addIllustratedStory(IllustratedStory: IIllustratedStory): Observable<IIllustratedStory> {
    return this.http.post<IIllustratedStory>(`${this.apiUrl}/v1/illustrated-stories`, IllustratedStory)
    .pipe(
      // catchError(this.handleError('addIllustratedStory', IIllustratedStoryPostData))
    );
  }

  updateIllustratedStory(id: number | string, IllustratedStory: IIllustratedStory): Observable<IIllustratedStory> {
    return this.http.patch<IIllustratedStory>(`${this.apiUrl}/v1/illustrated-stories/${id}`, IllustratedStory)
    .pipe(
      // catchError(this.handleError('updateIllustratedStory', IIllustratedStoryPostData))
    );
  }

  getIllustratedStoryById(id: number | string): Observable<IIllustratedStory>{
    return this.http.get<IIllustratedStory>(`${this.apiUrl}/v1/illustrated-stories/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteIllustratedStory(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/illustrated-stories/${id}`)
      .pipe(
        // catchError(this.handleError('deleteIllustratedStory'))
      );
  }
}
