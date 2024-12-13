import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  showDoctorTab: boolean = true;
  isEditing = false;
  isDocEditing = false;
  isPatEditing = false;

  doctors = [
    { name: 'Dr. Triston Smith', specialty: 'Cardiologist' },
    { name: 'Dr. Anthony Davis', specialty: 'Dermatologist' },
    { name: 'Dr. Jane Johnson', specialty: 'Orthopedic' },
  ];

  patients = [
    { name: 'Jane smith', age: 28 },
    { name: 'Mark Cooper', age: 35 },
    { name: 'Barry Gareth', age: 22 },
  ];

  showDoctors() {
    this.showDoctorTab = true;
    this.cancelPat();
  }

  showPatients() {
    this.showDoctorTab = false;
    this.cancelDoc();
  }

  // Edit doctor
  editDoctor(doctor: any) {
    this.updateDoc(doctor);
  }

  updateDoc(doctor: any) {
    this.isDocEditing = !this.isDocEditing;
  }

  cancelDoc() {
    this.isDocEditing = false;
  }
  // Delete Doctor
  deleteDoctor(doctor: any) {
    if (confirm(`Are you sure you want to delete ${doctor.name}?`)) {
      this.doctors = this.doctors.filter((d) => d !== doctor);
      console.log('Doctor deleted:', doctor);
    }
  }

  // Edit patient
  editPatient(patient: any) {
    this.updatePat(patient);
  }

  updatePat(patient: any) {
    this.isPatEditing = !this.isPatEditing;
  }
  cancelPat() {
    this.isPatEditing = false;
  }
  // Delete Patient
  deletePatient(patient: any) {
    if (confirm(`Are you sure you want to delete patient ${patient.name}?`)) {
      this.patients = this.patients.filter((p) => p !== patient);
    }
  }
}
