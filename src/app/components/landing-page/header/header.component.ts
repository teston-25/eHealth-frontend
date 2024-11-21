import { Component } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouterOutlet,
  RouterLink,
} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Track the current route to avoid redundant navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  handleNavigation(event: Event, targetRoute: string): void {
    event.preventDefault(); // Prevent default anchor behavior
    if (this.currentRoute !== targetRoute) {
      // Only navigate if the target route is different
      this.router.navigate([targetRoute]);
    }
  }
}
