import { HttpClient } from '@angular/common/http';
import { IContact } from 'src/app/shared/interfaces/contact/contact';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactInformationService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  getAllContacts(url=''): Observable<IContact[] | any> {
    return this.http.get<IContact[]>(url ? url : `${this.apiUrl}/v1/contacts`).pipe(
      tap(data => data),
      // catchError(this.handleError)
    );
  }

  addContact(county: IContact): Observable<IContact> {
    return this.http.post<IContact>(`${this.apiUrl}/v1/contacts`, county)
    .pipe(
      // catchError(this.handleError('addContact', IContactPostData))
    );
  }

  updateContact(id: number | string, county: IContact): Observable<IContact> {
    return this.http.patch<IContact>(`${this.apiUrl}/v1/contacts/${id}`, county)
    .pipe(
      // catchError(this.handleError('updateContact', IContactPostData))
    );
  }

  getContactById(id: number | string): Observable<IContact>{
    return this.http.get<IContact>(`${this.apiUrl}/v1/contacts/${id}`).pipe(
      tap(data => data)
      // catchError(this.handleError)
    );
  }


  deleteContact(id: number | string): Observable<{}> {
    return this.http.delete(`${this.apiUrl}/v1/contacts/${id}`)
      .pipe(
        // catchError(this.handleError('deleteContact'))
      );
  }
}
