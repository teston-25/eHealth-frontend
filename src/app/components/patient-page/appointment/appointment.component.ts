import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  appointments = [
    {
      date: '2024-11-21',
      time: '10:00 AM',
      doctor: 'Dr. Smith',
    },
    {
      date: '2024-11-22',
      time: '11:30 AM',
      doctor: 'Dr. Williams',
    },
  ];

  isAddAppointmentModalOpen = false;

  newAppointment = {
    date: '',
    time: '',
    doctor: '',
  };

  toggleAddAppointmentModal() {
    this.isAddAppointmentModalOpen = !this.isAddAppointmentModalOpen;
  }

  addAppointment() {
    if (
      this.newAppointment.date &&
      this.newAppointment.time &&
      this.newAppointment.doctor
    ) {
      this.newAppointment.doctor.toUpperCase();
      this.appointments.push({ ...this.newAppointment });
      this.newAppointment = { date: '', time: '', doctor: '' };
      this.toggleAddAppointmentModal();
    }
  }

  formatTime(time: string): string {
    const [hour, minute] = time.split(':');
    const h = parseInt(hour, 10);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const formattedHour = h % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  }
}
