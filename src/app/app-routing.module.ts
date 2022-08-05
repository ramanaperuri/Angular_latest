import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidatesDetailComponent } from './candidates-detail/candidates-detail.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { ReqresComponent } from './reqres/reqres.component';
import { ResumeCheckerComponent } from './resume-checker/resume-checker.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: "checker", component: ResumeCheckerComponent},
  { path: 'candidates-detail', component: CandidatesDetailComponent},
  { path: 'reqres', component: ReqresComponent},
  { path: 'jobs', component: JobsComponent},
  { path: 'upload', component: UploadComponent},
  { path: 'home-content', component: HomeContentComponent},
  { path: '', redirectTo: 'home-content', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
