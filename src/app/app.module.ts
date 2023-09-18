import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LoginComponent} from './feature/login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";
import {AuthGuard} from "./core/_guard/auth.guard";
import {HttpClientModule} from "@angular/common/http";

const rootRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'employee'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./layout/layout.router').then((m) => m.EMPLOYEE_ROUTERS)
  },

]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoginComponent,
    HttpClientModule,
    RouterModule.forRoot(rootRoutes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
