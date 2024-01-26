import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

interface IUser {
  id: string,
  name: string
  email: string
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authStatus = new BehaviorSubject<boolean>(false);
  private user: IUser[]; // Константа для хранения профиля
  private authProfile: any

  constructor() {
    this.user = [{
      id: '1',
      name: 't',
      email: 't@ru',
      password: 't',
    }]
  }

  get isAuthenticated() {
    return this.authStatus
  }

  get getUserId() {
    return this.authProfile?.id;
  }

  logIn(email: string, password: string): void {
    this.user.map((e) => {
        if (e.email === email && e.password === password) {
          this.authProfile = e
          this.authStatus.next(true);
        } else alert('Вы ввели неправильный логин и пароль')
      }
    )
    this.authStatus.next(true)
    console.log(this.authProfile)
  }

  get isAuthProfile() {
    return this.authProfile
  }

  signUp(name: string, email: string, password: string, matchingPass: string): void {
    const id = this.user.length + 1
    const newAcc = {id, name, email, password};
    this.addProfile(newAcc)
  }

  // Функция для добавления профиля в константу
  addProfile(profile: any): void {
    this.user.push(profile);
    this.authStatus.next(false); // Обновление статуса аутентификации
    console.log('Profile added:', this.user);
  }
}
