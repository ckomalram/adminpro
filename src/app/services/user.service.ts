import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap } from 'rxjs/operators';


const baseUrl = environment.BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData: RegisterForm) {
    console.log('Creando usuario: ', formData);

    return this.http.post(`${baseUrl}/users`, formData).pipe(
      tap((resp: any) => {
        console.log(resp);

        localStorage.setItem('x-token', resp.token);
      })
    )
  }

  login(formData: LoginForm) {
    // console.log('Logeando usuario: ', formData);

    return this.http.post(`${baseUrl}/login`, formData).pipe(
      tap((resp: any) => {
        console.log(resp);

        localStorage.setItem('x-token', resp.token);
      })
    )
  }

  loginWithGoogle(token: string){

    return this.http.post(`${baseUrl}/login/google`, { token})
    .pipe(
      tap((resp: any) => {
        console.log(resp);

        localStorage.setItem('x-token', resp.token);
      })
    )
  }
}
