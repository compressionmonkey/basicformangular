import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-age',
  templateUrl: './login-age.component.html',
  styleUrls: ['./login-age.component.scss']
})
export class LoginAgeComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+)$')
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ]],
      agree: [false, [
        Validators.requiredTrue
      ]]
    });
  }
  seeChange(e){
    // console.log('hey', e)
    console.log('here', this.age)
  }
  get email(){
    return this.myForm.get('email');
  }
  get password(){
    return this.myForm.get('password');
  }
  get age(){
    return this.myForm.get('age');
  }
  get agree(){
    return this.myForm.get('agree');
  }

  onClick(){
    console.log('paa', this.myForm.valid)
  }
  callingFunction(){
    alert()
  }

}
