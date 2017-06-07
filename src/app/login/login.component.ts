import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginData = {email: "viniciusferrarini@outlook.com", password: "123456"};

    constructor(private _service:AppService) {}
 
    login() {
        this._service.obtainAccessToken(this.loginData);
    }
}
