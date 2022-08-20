import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html'
})
export class AccountSettingComponent implements OnInit {


  constructor(private settingservice: SettingsService) { }

  ngOnInit(): void {
    this.settingservice.checkCurrentTheme();
  }

  changeTheme(theme: string){
    this.settingservice.changeTheme(theme);

  }

}
