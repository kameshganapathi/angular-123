import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getUserById(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }

  private readonly USERS_URL = 'https://dummyjson.com/users';
  
  private readonly CREATE_USERS_URL = 'https://dummyjson.com/users/add';

 
  

  createUsers(user:any){
    return this.httpClient.post<any>(this.CREATE_USERS_URL,user);
  }

  getUsers() {
    return this.httpClient.get<any>(this.USERS_URL);
  }

  getUsersById(id:any) {
    return this.httpClient.get<any>(this.USERS_URL+'/'+id);
  }

  updateUsers(user:any,id:any){
    let updateUrl = this.USERS_URL+'/'+id;
    return this.httpClient.put<any>(updateUrl,user);
  }

  deleteUser(id:any){
    return this.httpClient.delete<any>(this.USERS_URL+'/'+id);
  }
}
