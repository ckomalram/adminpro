import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';


const baseUrl = environment.BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router:  Router) { }

  validateToken(): Observable<boolean>{
    const token = localStorage.getItem('x-token') || '';

    return this.http.get(`${baseUrl}/login/renew`, {
      headers: {'x-token': token}
    }).pipe(
      tap((resp: any) => {
        localStorage.setItem('x-token', resp.token);
      }),
      map(resp => true),
      catchError(error =>  of(false))
    )
  }

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

  logout(){
    localStorage.removeItem('x-token');

    this.router.navigateByUrl('/login');
    // google.accounts.id.revoke(this.user.email, () => {
    //   this.router.navigateByUrl('/login');
    // })

    // google.accounts.id.revoke('komalramtec@gmail.com', () => {
    //   this.router.navigateByUrl('/login');
    // })
  }
}
