import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  id: any = 0;
  user: User ={} as User;
  User: any;
  constructor(private _Activatedroute: ActivatedRoute, private _ApiService: ApiService, private _Router: Router) { }

  ngOnInit(): void {

    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this._ApiService.getUsersById(this.id).subscribe((response: User) => {
       this.user = response;
    })

  }

  edit(){
    this._Router.navigate(['/editproduct',this.User.id]);
  }

  delete(){
    this._ApiService.deleteUser(this.id).subscribe(response => {
      this._Router.navigate(['/User']);
   })
  }

}
