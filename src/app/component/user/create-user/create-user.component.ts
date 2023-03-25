import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm = {} as FormGroup;

  constructor(private formBuilder: FormBuilder, private _ApiService: ApiService, private _Router: Router) { }

  ngOnInit(): void {

    this.userForm = this.formBuilder.group({
			id: ['', Validators.required],
			username: '',
      email: '',
      phone:''
		});

  }

  createUser(){

    console.log(this.userForm.value);

    this._ApiService.createUsers(this.userForm.value).subscribe(response=>{
      console.log(response);
      this._Router.navigate(['/productdetails',1]);
    });

  }

  back(){

    this._Router.navigate(['/users']);
    
  }

}
