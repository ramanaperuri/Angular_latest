import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ResumeCheckerComponent } from './resume-checker/resume-checker.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatModule } from './appModules/mat/mat.module';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { ReqresComponent } from './reqres/reqres.component';
import { JobsComponent } from './jobs/jobs.component';
import { UploadComponent } from './upload/upload.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    LoginComponent,
    ResumeCheckerComponent,
    CandidatesDetailComponent,
    ReqresComponent,
    JobsComponent,
    UploadComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
