import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Reqres } from './reqres';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private httpClient : HttpClient) { }

  private baseURL = "https://reqres.in/api/users?page=1";

  getAllProfilesData(): Observable<any> {
      return this.httpClient.get<any>(`${this.baseURL}`);
  }
}
