import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  //nav mob
  ham: HTMLElement | null = null;
  off: HTMLElement | null = null;
  nav: HTMLElement | null = null;

  ngOnInit() {
    // Access the buttons by their IDs once the view is initialized
    this.ham = document.getElementById('btnham');
    this.off = document.getElementById('btnclose');
    this.nav = document.querySelector('.menu');
  }

  onMenu() {
    if (this.ham && this.off && this.nav) {
      this.ham.classList.add('hidden');
      this.ham.classList.remove('active');
      this.off.classList.add('active');
      this.off.classList.remove('hidden');
      this.nav.classList.add('active');
      this.nav.classList.remove('hidden');
    }
  }

  offMenu() {
    if (this.ham && this.off && this.nav) {
      this.ham.classList.add('active');
      this.ham.classList.remove('hidden');
      this.off.classList.add('hidden');
      this.off.classList.remove('active');
      this.nav.classList.add('hidden');
      this.nav.classList.remove('active');
    }
  }

  //navigation bar
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: elementPosition - 75, // Adjust the offset here
        behavior: 'smooth',
      });
    }
  }
}
