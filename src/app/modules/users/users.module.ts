import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: []
})
export class UsersModule { }
