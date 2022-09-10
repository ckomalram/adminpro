import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form.interface';
import { environment } from '../../environments/environment';


const baseUrl = environment.BASE_URL;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(formData: RegisterForm) {
    console.log('Creando usuario: ', formData);

    return this.http.post(`${baseUrl}/users`, formData);
  }
}
