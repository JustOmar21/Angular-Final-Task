import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private userService:UserService){}
  loginStatus : boolean | undefined;
  ngOnInit(): void {
    this.loginStatus = this.userService.isLogged();
  }

}
