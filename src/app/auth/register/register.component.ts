import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formSubmitted = false;

  public registerForm = this.formbuilder.group({
    name: ['komalram', [Validators.required, Validators.minLength(3)]],
    email: ['komalram@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(5)]],
    password2: ['1234567', [Validators.required, Validators.minLength(5)]],
    terms: [false, [Validators.required]]
  }, {
    validators: this.passwordIguales('password', 'password2')
  });

  constructor(private formbuilder: FormBuilder) { }

  createUser() {
    this.formSubmitted = true;
    // console.log(this.registerForm.value);
    // console.log(this.registerForm);
    // console.log(this.registerForm.valid);


    if (this.registerForm.valid) {
      console.log('Posteando formulario');
    } else {
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

  aceptaTerminos(): boolean {
    return !this.registerForm.get('terms')?.value && this.formSubmitted;
  }

  passwordNoNalido(): boolean {
    const pass1 = this.registerForm.get('password')?.value;
    const pass2 = this.registerForm.get('password2')?.value;

    if (pass1 !== pass2 && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  passwordIguales(password1name: string, password2name: string) {

    return (formgroup: FormGroup) => {
      const pass1Control = formgroup.get(password1name);
      const pass2Control = formgroup.get(password2name);

      if (pass1Control?.value === pass2Control?.value) {
        pass2Control?.setErrors(null);
      } else {
        pass2Control?.setErrors({ passwordNoIguales: true });
      }
    }
  }

}
