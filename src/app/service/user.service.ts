import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseURL : string = "http://localhost:4000/users";
  token :boolean = false;
  constructor(private http : HttpClient) { }

  Login(username:string , password:string)
  {
    this.http.get<IUser>(`${this.baseURL}/?username=${username}&password=${password}`).subscribe((data)=>{
      if(data) this.token = true;
    })
  }

  Logout(){
    this.token = false;
  }

  isLogged(){
    return this.token;
  }
}
