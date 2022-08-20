import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public  elemento = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.elemento?.setAttribute('href', url);
   }

   changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.elemento?.setAttribute('href', url);
    localStorage.setItem('theme', url);
      this.checkCurrentTheme();

  }

  checkCurrentTheme(){
     const links = document.querySelectorAll('.selector');

    links.forEach(elemento => {
      elemento.classList.remove('working');
      const btnTheme = elemento.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.elemento?.getAttribute('href');

      if (btnThemeUrl === currentTheme) {
        elemento.classList.add('working');
      }
    });
  }
}
