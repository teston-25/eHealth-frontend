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
  loginData = {
    email: '',
    password: '',
    role: 'doctor', // Default role
  };

  handleLogin() {
    console.log('Login Data:', this.loginData);
    // Send loginData to the backend API for validation
  }
}
