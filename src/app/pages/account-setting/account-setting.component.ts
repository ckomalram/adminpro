import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html'
})
export class AccountSettingComponent implements OnInit {

  public  elemento = document.querySelector('#theme');
  public links!: NodeListOf<Element>;
  constructor() { }

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkCurrentTheme();
  }

  changeTheme(theme: string){
    const url = `./assets/css/colors/${theme}.css`;
    this.elemento?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }

  checkCurrentTheme(){

    this.links.forEach(elemento => {
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
