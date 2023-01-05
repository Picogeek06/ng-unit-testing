import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  formGroup: any = new FormGroup({});
  userFirstName: any;
  userLastName: any;
  userName: string = '';

    constructor(
      private fb: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.formGroup = this.fb.group({})
    this.formGroup.addControl('firstName', new FormControl('', [Validators.required]));
    this.formGroup.addControl('lastName', new FormControl('', [Validators.required]));
    // this.formGroup.addControl('email', new FormControl('', [Validators.required, Validators.email]));
    // this.formGroup.addControl('phoneNumber', new FormControl('', [Validators.required, Validators.maxLength(10)]));
  }

  onSubmit() {
    if(this.formGroup.valid) {
      this.userName = this.userFirstName + this.userLastName;
      console.log("fb", this.fb);
      alert( `is your name really ${this.userFirstName} ${this.userLastName}?`)
    }
  }

}
