import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const baseUrl = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class BusquedasService {
  constructor(private http: HttpClient) {}

  get token() {
    console.log(localStorage.getItem('x-token'));
    return localStorage.getItem('x-token') || '';
  }

  get headers() {
    return {
      headers: { 'x-token': this.token },
    };
  }

  buscar(tipo: 'users' | 'medicos' | 'hospitals', termino: string) {
    // http://localhost:3000/api/generalsearch/collection/users/ram
   //  http://localhost:3000/api/generalsearch/collection/users/1
   // "http://localhost:3000/api/generalsearch/collection/users/ra"

    return this.http
      .post(
        `${baseUrl}/generalsearch/collection/${tipo}/${termino}`,null,
        this.headers
      )
      .pipe(map((resp: any) => resp.resultados));
  }
}
