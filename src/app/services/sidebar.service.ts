import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      titulo: 'ADV',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main' , url: '/'},
        {titulo: 'ProgressBar' , url: 'progress'},
        {titulo: 'Gráficas' , url: 'grafica1'}
      ]
    },
    {
      titulo: 'ADV Comercial',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main' , url: '/'},
        {titulo: 'ProgressBar' , url: 'progress'},
        {titulo: 'Gráficas' , url: 'grafica1'}
      ]
    }
    ,
    {
      titulo: 'Ejecutivo Ventas',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main' , url: '/'},
        {titulo: 'ProgressBar' , url: 'progress'},
        {titulo: 'Gráficas' , url: 'grafica1'},
        {titulo: 'rxjs' , url: 'rxjs'}
      ]
    }
  ];

  constructor() { }
}
