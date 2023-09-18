import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = JSON.parse(localStorage.getItem('isLogin')!);
  private dummyUser = {
    username: 'user@test.com',
    password: 'password'
  };
  constructor() { }


  login(username: string, password: string): Observable<boolean> {
    if (username === this.dummyUser.username && password === this.dummyUser.password) {
      this.isAuthenticated = true;
      return of(true);
    }
    return of(false);
  }

  logout(): void {
    localStorage.removeItem('isLogin');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
