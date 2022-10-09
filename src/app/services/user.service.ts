import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';
import { LoginForm } from '../interfaces/login-form.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { LoadUsers } from '../interfaces/load-users.interfaces';

const baseUrl = environment.BASE_URL;
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: User;

  constructor(private http: HttpClient, private router: Router) {
    this.user = new User('', '','',false,'','','');
  }

  get token() {
    return localStorage.getItem('x-token') || '';
  }

  get uid(){
    return this.user.uid || '';
  }

  get headers(){
    return {
      headers: { 'x-token': this.token },
    }
  }

  validateToken(): Observable<boolean> {
    // const token = localStorage.getItem('x-token') || '';

    return this.http
      .get(`${baseUrl}/login/renew`, {
        headers: { 'x-token': this.token },
      })
      .pipe(
        map((resp: any) => {
          const { email, google, img = '', name, role, uid } = resp.user;
          this.user = new User(name, email, '', google, img, role, uid);
          localStorage.setItem('x-token', resp.token);
          return true;
        }),
        catchError((error) => of(false))
      );
  }

  createUser(formData: RegisterForm) {
    console.log('Creando usuario: ', formData);

    return this.http.post(`${baseUrl}/users`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('x-token', resp.token);
      })
    );
  }

  updateProfile(data: { email: string; name: string, role: string }) {

    data = {
      ...data,
      role: this.user?.role
    };

    return this.http.put(`${baseUrl}/users/${this.uid}`, data, {
      headers: { 'x-token': this.token },
    });
  }

  login(formData: LoginForm) {
    // console.log('Logeando usuario: ', formData);

    return this.http.post(`${baseUrl}/login`, formData).pipe(
      tap((resp: any) => {
        console.log(resp);

        localStorage.setItem('x-token', resp.token);
      })
    );
  }

  loginWithGoogle(token: string) {
    return this.http.post(`${baseUrl}/login/google`, { token }).pipe(
      tap((resp: any) => {
        console.log(resp);

        localStorage.setItem('x-token', resp.token);
      })
    );
  }

  logout() {
    localStorage.removeItem('x-token');

    this.router.navigateByUrl('/login');
    // google.accounts.id.revoke(this.user.email, () => {
    //   this.router.navigateByUrl('/login');
    // })

    // google.accounts.id.revoke('komalramtec@gmail.com', () => {
    //   this.router.navigateByUrl('/login');
    // })
  }

  getUsers(from: number=0, limit: number= 5){
    // http://localhost:3000/api/users?from=0&limit=5
    return this.http.get<LoadUsers>(`${baseUrl}/users?from=${from}&limit=${limit}`, this.headers);
  }
}
