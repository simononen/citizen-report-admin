import { HttpClient } from '@angular/common/http';
import { IFavourite } from 'src/app/shared/interfaces/favourites/favourite';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllFavourites(url=''): Observable<IFavourite[] | any> {
    return this.http.get<IFavourite[]>(url ? url : `${this.apiUrl}/v1/favourites`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addFavourite(county: IFavourite): Observable<IFavourite> {
    return this.http.post<IFavourite>(`${this.apiUrl}/v1/favourites`, county)
    .pipe(
      // catchError(this.handleError('addFavourite', IFavouritePostData))
    );
  }

  updateFavourite(id: number | string, county: IFavourite): Observable<IFavourite> {
    return this.http.patch<IFavourite>(`${this.apiUrl}/v1/favourites/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateFavourite', IFavouritePostData))
    );
  }

  getFavouriteById(id: number | string): Observable<IFavourite>{
    return this.http.get<IFavourite>(`${this.apiUrl}/v1/favourites/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteFavourite(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/favourites/${id}`)
      .pipe(
        // catchError(this.handleError('deleteFavourite'))
      );
  }
}
