import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  //about us
  teamMembers = [
    {
      name: 'Dr. Jane Smith',
      role: 'Chief Medical Officer',
      image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
      name: 'John Doe',
      role: 'Head of Engineering',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Emily Johnson',
      role: 'Product Manager',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Michael Brown',
      role: 'Data Scientist',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Sophia Davis',
      role: 'UX Designer',
      image: 'https://via.placeholder.com/150',
    },
  ];
}
