import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

public user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

}
