import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  userEditForm = {} as FormGroup;
  id: any = 0;
  user: User = {} as User;
  UserEditForm: any;
  constructor(private formBuilder: FormBuilder, private _Activatedroute: ActivatedRoute,
     private _ApiService: ApiService, private _Router: Router) { }

  ngOnInit(): void {

    this.userEditForm = this.formBuilder.group({
      title: ['', Validators.required],
      price: '',
    });


    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this._ApiService.getUsersById(this.id).subscribe(response => {
      this.user = response;

      this.userEditForm.patchValue({Name:this.user.name});
      
    })
  }

  editProduct() {

    this._ApiService.updateUsers(this.UserEditForm.value,this.user.name).subscribe(response => {
      console.log(response);
      this._Router.navigate(['/userdetails', this.user.name]);
    });

  }

  back() {

    this._Router.navigate(['/userdetails',1]);

  }

}