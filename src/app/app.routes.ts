import { Routes } from '@angular/router';
import { MainBodyComponent } from './components/landing-page/homepage/main-body.component';
import { LoginComponent } from './components/landing-page/login/login.component';
import { SignupComponent } from './components/landing-page/signup/signup.component';
import { PatientRoleComponent } from './components/patient-role/patient-role.component';
import { AdminDashboredComponent } from './components/admin-dashbored/admin-dashbored.component';
import { DocterRoleComponent } from './components/doctor-page/docter-role/docter-role.component';

export const routes: Routes = [
  // { path: '', component: AdminDashboredComponent },
  { path: '', component: MainBodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'doc', component: DocterRoleComponent },
  { path: 'pat', component: PatientRoleComponent },
];
