import { Component, OnInit } from '@angular/core';
import { Reqres } from '../reqres';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-reqres',
  templateUrl: './reqres.component.html',
  styleUrls: ['./reqres.component.css']
})
export class ReqresComponent implements OnInit {

  reqres: any={};

  variable:any=[];

  constructor(private _reqresService: ReqresService) { }

  ngOnInit(): void {
    this._reqresService.getAllProfilesData().subscribe(
      response => {
        this.variable = response;
        this.reqres = response.data;
      }
    )
      /*
    this.reqres = [{
      id: 1,
      first_name: "alok",
      last_name: "ranjan",
      email: "alok@gmail.com",
      total: 7,
    }];*/

  }

}

