import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { usernameValidator } from 'src/app/common/validators/user-validators';

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
  title: any;

  constructor(
    private usersService: UsersService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  initializeForm(): void {
    this.formGroup.addControl('firstName', new FormControl('', [Validators.required]));
    this.formGroup.addControl('lastName', new FormControl('', [Validators.required]));
    this.formGroup.addControl('username', new FormControl('', [usernameValidator.bind(this)]));
    this.formGroup.addControl('email', new FormControl('', [Validators.required, Validators.email]));
    this.formGroup.addControl('phoneNumber', new FormControl('', [Validators.required, Validators.maxLength(10)]));
  }

  onSubmit() {
    let createUserData = {
      name: this.formGroup.value.firstName + this.formGroup.value.lastName,
      username: this.formGroup.value.username,
      email: this.formGroup.value.email,
      phoneNumber: this.formGroup.value.phoneNumber,
    }
    if (this.formGroup.valid) {
      this.userName = this.userFirstName + this.userLastName;
      this.usersService.createUser(createUserData).subscribe((res: any) => {
      });
    }
  }

}
