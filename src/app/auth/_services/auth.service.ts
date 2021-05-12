import { HandleError, HttpHandleErrorService } from 'src/app/shared/services/http-handle-error/http-handle-error.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IJsonAPILogin, IUser } from 'src/app/shared/interfaces/user/User';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// Setup headers
const httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    })
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public currentUser: IUser = {};
    private handleError: HandleError;

    private readonly apiUrl = environment.apiUrl;

    private loginUrl = ``;
    private passwordResetLinkUrl = `${this.apiUrl}/reset-password-link`;
    private passwordReset = `${this.apiUrl}/reset-password`;

    constructor(
        private router: Router,
        private http: HttpClient,
        private _httpHandleErrorService: HttpHandleErrorService,
    ) {
        this.handleError = _httpHandleErrorService.createHandleError('AuthService');
    }

    login(userData: IJsonAPILogin): Observable<any[] | IUser> {

        const request = JSON.stringify(
            {
              email: userData.data.attributes.email,
              password: userData.data.attributes.password
            }
            // {
            //   "email": "admin@citizenreport.com",
            //   "password": "fEStrado"
            // }
        );

        return this.http.post(`${this.apiUrl}/auth/login`, request, httpOptions)
            .pipe(
                map((response: any) => {
                    const token: string = response['access_token'];
                    if (token && token !== null && token !== undefined) {
                        this.setToken(token);
                        // this.router.navigate(['/directorate/districts']);
                    }
                    return response;
                }),
                // catchError(this.handleError('login', []))
            );
    }

    logout(): Observable<IUser> {
        return this.http.post(`${this.apiUrl}/logout`,
            httpOptions).pipe(
                tap(
                    () => {
                        localStorage.clear();
                        this.router.navigate(['/']);
                    }
                )
            );
    }

    setToken(token: string): void {
        return localStorage.setItem('token', token);
    }

    getToken(): string {
        return localStorage.getItem('token') || '';
    }

    // getUser(): Observable<IUser> {
    //     return this.http.get(this.apiUrl + '/me')
    //         .pipe(
    //             tap(
    //                 (res) => {
    //                     this.currentUser = res['data']['user'];
    //                     const role = res['data']['roles'][0];
    //                     localStorage.setItem('user', JSON.stringify(this.currentUser));
    //                     localStorage.setItem('role', JSON.stringify(role));
    //                     localStorage.setItem('role_name', res['data']['roles'][0]['name']);
    //                     // localStorage.setItem('resetter', this.currentUser)
    //                 }
    //             )
    //         );
    // }

    isAuthenticated(): boolean {
        const token: string = this.getToken();
        if (token) {
            return true;
        }
        return false;
    }

    // getCurrentUser() {
    //     return JSON.parse(localStorage.getItem('user'));
    // }

    // getUserId() {
    //     return JSON.parse(localStorage.getItem('user'))['id'];
    // }

    resetPassword(email: string) {
        return this.http.post(`${this.passwordReset}`, email)
            .pipe(
                catchError(this.handleError('resetPassword', []))
            );
    }



}
