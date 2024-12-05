import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashbored',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashbored.component.html',
  styleUrl: './admin-dashbored.component.css',
})
export class AdminDashboardComponent {
  totalUsers = 1000;
  activeUsers = 150;
  appointmentsToday = 45;
  revenueSummary = 3200;

  // User data for tables
  doctors = [
    { name: 'Dr. John Brooks', specialty: 'Cardiology' },
    { name: 'Dr. Adel Smith', specialty: 'Dermatology' },
  ];

  patients = [
    { name: 'Jalen Johnson', age: 34 },
    { name: 'Mickel kebron', age: 45 },
  ];
}
