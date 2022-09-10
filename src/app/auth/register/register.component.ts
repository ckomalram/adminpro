import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.formbuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    password2: ['', [Validators.required, Validators.minLength(5)]],
    terms: [false, [Validators.required]]
  });

  constructor(private formbuilder: FormBuilder) { }

  createUser() {
    this.formSubmitted = true;
    // console.log(this.registerForm.value);
    // console.log(this.registerForm);
    // console.log(this.registerForm.valid);


    if (this.registerForm.valid) {
      console.log('Posteando formulario');
    }else{
      console.log('Formulario no es correcto..');
    }
  }

  campoNoValido(campo: string): boolean {

    if (this.registerForm.get(campo)?.invalid && this.formSubmitted) {
      return true
    } else {
      return false
    }
  }

  aceptaTerminos() {

    return !this.registerForm.get('terms')?.value && this.formSubmitted;



  }


}
