import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class ProductsComponent implements OnInit {
  users: any;

  
  constructor(private _ApiService: ApiService, private _Router:Router) {
  }

  products: Array<User> = [];

  ngOnInit(): void {

    this.loadProducts();

  }

  loadProducts() {
    //API call
    this._ApiService.getUsers().subscribe(response => {
      this.users = response.users;
      
    });
  }

  UsersDetails(user:User){
    this._Router.navigate(['/userdetails',user.id]);
  }

  ngOnDestroy(){
    console.log('Destroy');

  }

}

