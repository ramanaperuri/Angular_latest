import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  username!: string;
  password!: string;
  showSpinner!: true;

  public login(username: string, password: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic '+ btoa(username+":"+password)
    })
    this.http.get("http://localhost:8080/",{headers, responseType:'text' as 'json'});
    ;
  }

  /*login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["/home"]);
    }else {
      alert("Invalid credentials");
    }
  }*/

  signIn() : void {
    this.router.navigate(["./home"]);
  }
}
