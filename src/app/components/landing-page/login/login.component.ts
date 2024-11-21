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
  email: string = '';
  password: string = '';

  loginAuth = { email: '', password: '' };
  login = { email: 'admin@gmail.com', password: 'admin' };
  if() {}

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  }
}
