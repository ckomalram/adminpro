import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'Ejemplos',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main' , url: '/'},
        {titulo: 'ProgressBar' , url: 'progress'},
        {titulo: 'Gráficas' , url: 'grafica1'},
        {titulo: 'rxjs' , url: 'rxjs'}
      ]
    },
    {
      titulo: 'Mantenimiento',
      icono: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Usuarios' , url: 'users'},
        {titulo: 'Hopitales' , url: 'hospital'},
        {titulo: 'Medicos' , url: 'medico'}
      ]
    }
  ];

  constructor() { }
}
