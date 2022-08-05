import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  apiURL = 'http://localhost:8080/uploadFile';
  
  constructor(private http: HttpClient) { }

  upload(formData:any) {
    return this.http.post(`${this.apiURL}`, formData)
  }
}
