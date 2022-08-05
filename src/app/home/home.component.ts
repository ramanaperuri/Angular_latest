import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  longText = "Scaledge AI Platform to look for the right candidate !!";

  links = ['Home', 'Candidates', 'Jobs', 'Resume_Checker'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  sigin() {
    this.router.navigate(['/']);
  };

}
