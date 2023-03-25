import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateUserComponent } from './component/user/create-user/create-user.component';
import { EditUserComponent } from './component/user/edit-user/edit-user.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'header', pathMatch: 'full'
  },
 
  {
    path: 'products', component: UserComponent,
  },
  {
    path: 'createproduct', component: CreateUserComponent,
  },
  {
    path: 'editproduct/:id', component: EditUserComponent,
  },
  {
    path: 'userdetails/:id', component: UserDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
