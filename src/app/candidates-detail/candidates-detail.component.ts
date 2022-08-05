import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { CanditatesDetailService } from '../canditates-detail.service';

@Component({
  selector: 'app-candidates-detail',
  templateUrl: './candidates-detail.component.html',
  styleUrls: ['./candidates-detail.component.css']
})
export class CandidatesDetailComponent implements OnInit  {

  candidates: any = [];

  constructor(private candidateService : CanditatesDetailService) { }

  displayedColumns: string[] = ['Name', 'Location'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    console.log("Entered ngOnInit()");
    this.candidateService.getCandidate().subscribe(
      res => { this.candidates = res; 
        console.log(res);
        console.log(this.candidates);
      }
    )
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  Name: string;
  Location: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Name: 'Ashish', Location: 'Bengaluru'}
];

/*{
  "Company Name": "Scaledge", 
  "Experience": "3 years", 
  "Qualification": "M.Tech", 
  "Skills": "Python,ML,DL,NLP"
}*/