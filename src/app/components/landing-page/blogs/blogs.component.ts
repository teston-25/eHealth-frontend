import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogPosts = [
    {
      title: 'The Future of Healthcare',
      author: 'Dr. Smith',
      date: 'Dec 10, 2024',
      content:
        'Discover how technology is reshaping the future of healthcare, from AI diagnostics to telemedicine solutions that improve patient care and accessibility.',
      tags: ['Health', 'Technology', 'Innovation'],
      image: 'https://via.placeholder.com/600x400',
      liked: false,
      likes: 0,
    },
    {
      title: 'Mental Health Awareness: Breaking the Stigma',
      author: 'Jane Doe',
      date: 'Nov 22, 2024',
      content:
        'Mental health is just as important as physical health. Join us as we explore strategies to prioritize mental wellness and create supportive communities.',
      tags: ['Mental Health', 'Awareness', 'Support'],
      image: 'https://via.placeholder.com/600x400',
      liked: false,
      likes: 0,
    },
    {
      title: 'Nutrition Myths Debunked',
      author: 'John Carter',
      date: 'Oct 15, 2024',
      content:
        'Are you confused about conflicting nutrition advice? We debunk common myths and provide evidence-based insights to help you make informed dietary choices.',
      tags: ['Nutrition', 'Wellness', 'Diet'],
      image: 'https://via.placeholder.com/600x400',
      liked: false,
      likes: 0,
    },
  ];
}
