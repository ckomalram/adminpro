import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public profileForm: FormGroup;
  public user: User;
  public imagenSubir!: File;
  public imgTmp: any = null;


  constructor(private fb: FormBuilder, private userService: UserService, private fus: FileUploadService) {
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

  cambiarImagen(event: any){
    this.imagenSubir = event.target.files[0];
    console.log(this.imagenSubir);

    if (!event.target.files[0]) {
      this.imgTmp = null;
      return ;
    }

    const reader = new FileReader();
    const url64= reader.readAsDataURL(event.target.files[0]);

    reader.onloadend = () => {
      this.imgTmp = reader.result;
      // console.log(reader.result);
    }
  }

  subirImagen(){
    this.fus.updatePhoto(this.imagenSubir, 'users', this.user.uid)
    .then( img => this.user.img = img);
  }

}
