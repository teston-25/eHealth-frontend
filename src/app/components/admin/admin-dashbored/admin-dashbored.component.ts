import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { UserComponent } from '../user/user.component';
import { AppointmentsComponent } from '../appointments/appointments.component';
import { FinancialsComponent } from '../financials/financials.component';
import { BlogsComponent } from '../blogs/blogs.component';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-admin-dashbored',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProfileComponent,
    HomeComponent,
    UserComponent,
    AppointmentsComponent,
    FinancialsComponent,
    BlogsComponent,
  ],
  templateUrl: './admin-dashbored.component.html',
  styleUrl: './admin-dashbored.component.css',
})
export class AdminDashboardComponent {
  activeSection: {
    [key in 'home' | 'user' | 'app' | 'blog' | 'financ' | 'profile']: boolean;
  } = {
    home: true,
    user: false,
    app: false,
    blog: false,
    financ: false,
    profile: false,
  };

  // Method to handle section changes
  onSectionChange(
    section: 'home' | 'user' | 'app' | 'blog' | 'financ' | 'profile'
  ): void {
    // Reset all sections to false
    for (let key in this.activeSection) {
      this.activeSection[
        key as 'home' | 'user' | 'app' | 'blog' | 'financ' | 'profile'
      ] = false;
    }
    this.activeSection[section] = true;
    this.offMenu();
  }

  //nav mob
  ham: HTMLElement | null = null;
  off: HTMLElement | null = null;
  nav: HTMLElement | null = null;
  bar: HTMLElement | null = null;

  ngOnInit() {
    // Access the buttons by their IDs once the view is initialized
    this.ham = document.getElementById('btnham');
    this.off = document.getElementById('btnclose');
    this.nav = document.querySelector('.nav');
    this.bar = document.querySelector('.nav-bar');
  }
  onMenu() {
    // this.onProfile = !this.onProfile;
    this.bar?.classList.remove('w-12');
    this.bar?.classList.add('w-52');
    this.nav?.classList.remove('hidden');
    this.ham?.classList.add('hidden');
    this.off?.classList.remove('hidden');
  }

  offMenu() {
    // this.onProfile = false;
    this.bar?.classList.add('w-12');
    this.bar?.classList.remove('w-52');
    this.nav?.classList.add('hidden');
    this.ham?.classList.remove('hidden');
    this.off?.classList.add('hidden');
  }
}
