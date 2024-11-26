import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  signupData = {
    name: '',
    email: '',
    password: '',
    role: 'doctor', // Default role
  };

  handleSignup() {
    console.log('Signup Data:', this.signupData);
  }
}
