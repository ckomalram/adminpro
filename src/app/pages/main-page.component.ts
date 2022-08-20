import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunction(): any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {

  constructor(private settingservice: SettingsService) { }

  ngOnInit(): void {
    // href="./assets/css/colors/default-dark.css"
    customInitFunction();
  }

}
