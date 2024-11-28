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
    role: 'doctor', // Default role
  };
  //patient
  patientData = {
    email: 'patient@gmail.com',
    password: 'patient',
    role: 'patient', // Default role
  };

  login() {
    this.userData.email.toLowerCase() === this.doctorData.email ||
    (this.patientData.email &&
      this.userData.password.toLowerCase() === this.doctorData.password) ||
    (this.patientData.password &&
      this.userData.role.toLowerCase() == this.doctorData.role) ||
    this.patientData.role
      ? this.userData.role == 'patient'
        ? (window.location.href = './pat')
        : (window.location.href = './doc')
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
