import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormGroup, Validators, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {subscribeOn} from "rxjs";
import {AuthService} from "../../service/auth/auth.service";


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})

export class AuthComponent {
  logInBoolean: boolean;
  signInForm: FormGroup;
  alert: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.logInBoolean = false
    this.signInForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      matchingPass: ['', [Validators.required]],
    });
  }

  toggleSignIn(value: boolean) {
    this.logInBoolean = value;
    this.signInForm.controls['email'].reset('');
    this.signInForm.controls['password'].reset('');
  }

  logIn(): void {
    const {email, password} = this.signInForm.value
    this.authService.logIn(email, password);
    console.log(email, password)
  }

  signUp(): void {
    const {name, email, password, matchingPass} = this.signInForm.value
    try {
      this.authService.signUp(name, email, password, matchingPass);
    } catch (error) {
      // Обработка ошибок, например, отображение сообщения пользователю
    }
  }

}
