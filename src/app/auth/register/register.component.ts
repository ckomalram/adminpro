import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls:['./register.component.css']
})
export class RegisterComponent   {

  public registerForm= this.formbuilder.group({
    name: ['Carlyle Komalram', [Validators.required, Validators.minLength(3)]],
    email: ['ckomalram@bandelta.com', [Validators.required]],
    password: ['12345', [Validators.required, Validators.minLength(5)]],
    password2: ['12345', [Validators.required, Validators.minLength(5)]],
    terms: [false, [Validators.required]]
  });

  constructor(private formbuilder: FormBuilder) { }

  createUser(){
    console.log(this.registerForm.value);
  }



}
