import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscriber, throwError } from 'rxjs';
import { User } from '../Models/Login';
import { RespuestaAPI } from '../Models/RespuestaAPI';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private readonly API_URL = 'https://localhost:7143';

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

  iniciarSesion(usuario: User): Observable<RespuestaAPI> {
    console.log(' auth 1', usuario);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return new Observable((subscriber) => {
      this.httpClient
        .post<RespuestaAPI>(
          this.API_URL +
            '/Validate?Email=' +
            usuario.email +
            '&Clave=' +
            usuario.password,
          {}
        )
        .subscribe((data) => {
          //some stuff
          console.log('auth service', data);
          subscriber.next(data);
        });
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('jwt');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }
}
