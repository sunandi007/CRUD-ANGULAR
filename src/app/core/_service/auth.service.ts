import {inject, Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router)
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
    this.router.navigateByUrl('login')
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
