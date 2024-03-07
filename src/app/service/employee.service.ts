import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from '../models/IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL :string = "http://localhost:4000/employee"

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IEmployee[]>("http://localhost:4000/employee");
  }

  getByID(id:number){
    return this.http.get<IEmployee>(`${this.baseURL}/${id}`);
  }

  add(emp : IEmployee){
    console.log(emp)
    return this.http.post(this.baseURL,emp);
  }

  edit(emp:IEmployee){
    return this.http.put(`${this.baseURL}/${emp.id}`,emp);
  }

  delete(id:number){
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
