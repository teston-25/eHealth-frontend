import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userData = { email: '', password: '', role: '' };
  //doctor
  doctorData = {
    email: 'doctor@gmail.com',
    password: 'doctor',
    role: 'doctor',
  };
  //patient
  patientData = {
    email: 'patient@gmail.com',
    password: 'patient',
    role: 'patient',
  };
  //admin
  adminData = {
    email: 'admin@gmail.com',
    password: 'admin',
    role: '',
  };

  login() {
    (this.userData.email.toLowerCase() ===
      (this.doctorData.email ||
        this.patientData.email ||
        this.adminData.email) &&
      this.userData.password.toLowerCase() ===
        (this.doctorData.password ||
          this.patientData.password ||
          this.adminData.password) &&
      this.userData.role.toLowerCase() == this.doctorData.role) ||
    this.patientData.role ||
    this.adminData.role
      ? this.userData.role.toLowerCase() == 'patient'
        ? (window.location.href = './patient')
        : this.userData.role.toLowerCase() == 'doctor'
        ? (window.location.href = './doctor')
        : this.userData.role == ''
        ? (window.location.href = './admin')
        : alert('Invalid account')
      : alert('Invalid account');
    this.userData.email = '';
    this.userData.password = '';
    this.userData.role = '';
    console.log(this.userData);
  }

  // Angular Component Methods
  // constructor(private http: HttpClient) {}

  // login() {
  //   if (
  //     !this.userData.email ||
  //     !this.userData.password ||
  //     !this.userData.role
  //   ) {
  //     alert('All fields are required.');
  //     return;
  //   }

  //   this.http.post('http://localhost:4200/login', this.userData).subscribe(
  //     (response: any) => {
  //       localStorage.setItem('token', response.token);
  //       alert(`Login successful as ${response.role}`);
  //     },
  //     (error) => {
  //       alert(error.error.message || 'Login failed.');
  //     }
  //   );
  // }

  handleLogin() {
    console.log('Login Data:', this.patientData || this.doctorData);
  }
}
