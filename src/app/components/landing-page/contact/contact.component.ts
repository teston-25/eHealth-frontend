import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  //contacts
  email = 'support@gmail.com';
  contactForm = {
    name: '',
    email: '',
    message: '',
  };
  onSubmit() {
    this.contactForm = { name: '', email: '', message: '' };
  }
}
