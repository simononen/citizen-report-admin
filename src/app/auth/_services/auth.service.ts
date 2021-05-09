import { HandleError, HttpHandleErrorService } from 'src/app/shared/services/http-handle-error/http-handle-error.service';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';
import { IUser } from 'src/app/shared/interfaces/user/User';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

// App imports

// Setup headers
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public currentUser: IUser = {};
    private handleError: HandleError;

    private readonly apiUrl = environment.apiUrl;
    private registerUrl = `${this.apiUrl}/register`;
    private loginUrl = `${this.apiUrl}/login`;
    private passwordResetLinkUrl = `${this.apiUrl}/reset-password-link`;
    private passwordReset = `${this.apiUrl}/reset-password`;

    constructor(
        private router: Router,
        private http: HttpClient,
        private _httpHandleErrorService: HttpHandleErrorService,
    ) {
        this.handleError = _httpHandleErrorService.createHandleError('AuthService');
    }

    onRegister(user: IUser): Observable<any[] | IUser> {
        const request = JSON.stringify(
            {
                email: user?.email, password: user?.password,
            }
        );
        return this.http.post(this.registerUrl, request, httpOptions)
            .pipe(
                map((response: any) => {
                    // Receive jwt token in the response
                    const token: string = response['access_token'];
                    // If we have a token, proceed
                    if (token) {
                        this.setToken(token);
                        // this.getUser().subscribe();
                    }
                    return response;
                }),
                catchError(this.handleError('onRegister', []))
            );
    }

    login(user: IUser): Observable<any[] | IUser> {

        const request = JSON.stringify(
            { email: user.email, password: user.password }
        );

        return this.http.post(this.loginUrl, request,
            httpOptions)
            .pipe(
                map((response: any) => {
                    // Receive jwt token in the response
                    const token: string = response['access_token'];
                    // If we have a token, proceed
                    if (token && token !== null && token !== undefined) {
                        this.setToken(token);
                        // this.getUser().subscribe();
                        this.router.navigate(['/home']);
                    }
                    return response;
                }),
                // catchError(this.handleError('login', []))
            );
    }

    logout(): Observable<IUser> {
        return this.http.post(this.apiUrl + '/logout',
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

    getUserRole() {
        return localStorage.getItem('role_name');
    }

    getRole() {
        return localStorage.getItem('role_name');
    }

    // getRoleName() {
    //     return JSON.parse(localStorage.getItem('role'));
    // }

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
