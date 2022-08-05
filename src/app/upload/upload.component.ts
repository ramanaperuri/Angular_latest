import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  profileForm:any = FormGroup;

  name: string = '';
  files: any;
  pdfFile: any;
  result: any;

  getName(name: string){
    this.name = name;
  }

  getFile(event: any){
    this.files = event.target.files[0];
    console.log('file', this.files);
  }

  constructor(private fb: FormBuilder, private fileUploadService: UploadService, private http: HttpClient) { }

  ngOnInit() {
    
  }

  getPdf(event: any){
    this.pdfFile = event.target.files[0];
    console.log(this.pdfFile);
  }

  

   getBase64(pdfFile:any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(pdfFile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onSelectedFile(event: any){
    if(event.target.files.length > 0){
      const profile = event.target.files[0];
      this.profileForm.get('profile').setValue(profile);
    }
    console.log("This is the uploaded file: " + event.target.files);
  }

  onSubmit(){
    
    /*
    formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);

    this.fileUploadService.upload(formData).subscribe(res => {console.log(res)});
    */
   console.log('button pressed');
    let formData = new FormData();
    formData.set("name", this.name);
    formData.set("file", this.files);

    this.http.post('http://localhost:8080/uploadFile', formData).subscribe(
      resp => {}
    )

  }

  getEncodedFiles(){
    this.getBase64(this.pdfFile).then(
      response => { this.result = response}).then(
        () => {console.log(this.result)
      
        let formData = new FormData();
        formData.set("base64", this.result);

    this.http.post('http://localhost:4000/CheckOn', formData).subscribe(
      resp => {}
    )
  });
  }

}
