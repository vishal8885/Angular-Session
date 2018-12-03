import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-practice5',
  templateUrl: './practice5.component.html',
  styleUrls: ['./practice5.component.css']
})
export class Practice5Component implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  formResult = false;
  constructor(private builder: FormBuilder) {

  }

  ngOnInit() {
    this.signupForm = this.builder.group({
      firstname: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(6)])),
      lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      gender: new FormControl('male'),
      email: ['', Validators.compose([Validators.required, Validators.email, this.validate.bind(this)])],
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      confirmPassword: new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), this.validate.bind(this)])),
    });
  }

  onSubmit() {
    this.formResult = true;
  }

  validate(control: FormControl): ValidationErrors | null {
    const confirmPassword = control.root.get('confirmPassword');
    const password = control.root.get('password');
    if (confirmPassword) {

      if (confirmPassword.value !== password.value) {
        return {'mismatch': 'Passwords do not match'};
      }
    }
    return null;
  }
}
