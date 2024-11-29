import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  appointments = [
    {
      date: '2024-11-21',
      time: '10:00 AM',
      patientName: 'John Brooks',
      doctor: 'Dr. Smith',
    },
    {
      date: '2024-11-22',
      time: '11:30 AM',
      patientName: 'Jane Smith',
      doctor: 'Dr. Williams',
    },
    {
      date: '2024-11-21',
      time: '10:00 AM',
      patientName: 'John Brooks',
      doctor: 'Dr. Smith',
    },
    {
      date: '2024-11-22',
      time: '11:30 AM',
      patientName: 'Jane Smith',
      doctor: 'Dr. Williams',
    },
  ];
}
