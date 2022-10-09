import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;


  constructor(private fb: FormBuilder, private userService: UserService) {
    this.profileForm = this.fb.group({})
   }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      name: ['ckomalram', Validators.required],
      email: ['glaw15', [Validators.required, Validators.email]],
    })
  }

  updateProfile(){
    console.log(this.profileForm.value);

    this.userService.updateProfile(this.profileForm.value)
    .subscribe((resp: any) => {
      console.log(resp);
    })
  }

}
