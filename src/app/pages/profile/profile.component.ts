import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public user: User;


  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({})
    this.user = this.userService.user;
   }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [Validators.required, Validators.email]],
    })
  }

  updateProfile(){
    console.log(this.profileForm.value);

    this.userService.updateProfile(this.profileForm.value)
    .subscribe((resp: any) => {
      console.log(resp);
      const {name, email} = resp.user;

      this.user.name= name;
      this.user.email= email;

    })
  }

}
