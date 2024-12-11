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
    this.nav?.classList.remove('-translate-y-full', 'hidden');
    this.nav?.classList.add('translate-y-0');
    this.nav?.classList.add('bg-blue-900');
    this.ham?.classList.add('hidden');
    this.off?.classList.remove('hidden');
  }

  offMenu() {
    this.nav?.classList.add('-translate-y-full', 'hidden');
    this.nav?.classList.remove('translate-y-0');
    this.nav?.classList.remove('bg-blue-900');
    this.ham?.classList.remove('hidden');
    this.off?.classList.add('hidden');
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
      this.offMenu();
    }
  }
}
