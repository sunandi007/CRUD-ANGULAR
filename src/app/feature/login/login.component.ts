import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../core/_service/auth.service";
import {filter, tap} from "rxjs";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  notValid: boolean = false
  loginForm!: FormGroup;
  fb = inject(FormBuilder)
  router = inject(Router)
  service = inject(AuthService)
  ngOnInit() {
    this.formInit()
  }

  formInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.service.login(this.loginForm.value.email, this.loginForm.value.password).pipe(
        tap(res => {
          if (res) {
            localStorage.setItem('isLogin', 'true')
            this.router.navigate(['/']);
            this.notValid = false
          } else {
            this.notValid = true
          }
        })
      ).subscribe()
    }
  }
}
