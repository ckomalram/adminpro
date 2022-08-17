import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  public  elemento = document.querySelector('#theme');

  constructor() { }

  ngOnInit(): void {
    // href="./assets/css/colors/default-dark.css"
    const url = localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.elemento?.setAttribute('href', url);

  }

}
