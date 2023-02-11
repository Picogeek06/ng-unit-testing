import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'register',
    pathMatch: 'full',
    component: RegisterUserComponent,
  },
  {
    path: 'list',
    pathMatch: 'full',
    component: UsersListComponent,
  },
  {
    path: '**',
    redirectTo: 'register',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}