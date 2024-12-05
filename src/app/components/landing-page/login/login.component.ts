import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  handleLogin() {
    console.log('Login Data:', this.patientData || this.doctorData);
  }
}
