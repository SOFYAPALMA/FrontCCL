import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../Models/Login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private readonly API_URL = 'https://localhost:7143/api/';

  constructor(private httpClient: HttpClient) {
    //console.log("ctr auth service");
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  iniciarSesion(usuario: User): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    let user = this.httpClient.post<any>(this.API_URL + '/Validate', usuario, httpOptions);
    console.log(" auth service", user);
    return user;
  }

  ok(body?: {
    id: number;
    img: string;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
  }) {
    return of(new HttpResponse({ status: 200, body }));
  }
  error(message: string) {
    return throwError(message);
  }
}

  
