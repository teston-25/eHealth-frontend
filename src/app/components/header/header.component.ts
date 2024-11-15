import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  onHomeClick(event: Event) {
    // event.preventDefault();
  }
  onAboutClick(event: Event) {
    // event.preventDefault();
  }
  onBlogClick(event: Event) {
    // event.preventDefault();
  }
  onFClick(event: Event) {
    event.preventDefault();
  }
  onContactClick(event: Event) {
    // event.preventDefault();
  }
  onLogin() {}
}
