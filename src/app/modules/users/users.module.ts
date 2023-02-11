import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './services/users.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/common/shared.module';
import { UsersListComponent } from './components/users-list/users-list.component';


@NgModule({
  declarations: [
    RegisterUserComponent,
    UsersListComponent
  ],
  imports: [
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    CommonModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
