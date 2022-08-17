import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html'
})
export class AccountSettingComponent implements OnInit {

  public  elemento = document.querySelector('#theme');
  constructor() { }

  ngOnInit(): void {
  }

  changeTheme(theme: string){
    // console.log(theme);
    const url = `./assets/css/colors/${theme}.css`;
    this.elemento?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    // console.log(url);
    // console.log(elemento);


  }

}
