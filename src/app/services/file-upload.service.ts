import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const BASE_URL = environment.BASE_URL;

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  constructor() {}

  // usando fetchapi, metodo nativo de js.
  async updatePhoto(
    file: File,
    tipo: 'users' | 'medics' | 'hospitals',
    id: string
  ) {
    try {
      const url = `${BASE_URL}/upload/${tipo}/${id}`;
      const formData = new FormData();
      formData.append('imagen', file);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('x-token') || '',
        },
        body: formData,
      });

      const data = await resp.json();

      if (data.ok) {
        return data.nombreArchivo;
      }
      console.log(data);
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
