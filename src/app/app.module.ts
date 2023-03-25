import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';
import { CreateUserComponent } from './component/user/create-user/create-user.component';
import { EditUserComponent } from './component/user/edit-user/edit-user.component';
import { UserDetailsComponent } from './component/user/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    CreateUserComponent,
    EditUserComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
