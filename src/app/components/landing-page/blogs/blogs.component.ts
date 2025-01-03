import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, FormsModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  blogPosts = [
    {
      id: 1,
      title: '5 Tips for a Healthy Heart',
      author: 'Dr. John Smith',
      date: '2024-11-16',
      content:
        'Heart health is vital for overall well-being. Incorporating exercise, a balanced diet, and regular check-ups can make a huge difference.',
      tags: ['Heart Health', 'Wellness', 'Fitness'],
    },
    {
      id: 2,
      title: 'The Importance of Mental Health Awareness',
      author: 'Dr. Emily Jones',
      date: '2024-11-15',
      content:
        'Mental health is just as important as physical health. Learn how to manage stress and seek help when needed.',
      tags: ['Mental Health', 'Awareness', 'Self-Care'],
    },
    {
      id: 3,
      title: 'Superfoods You Should Include in Your Diet',
      author: 'Nutritionist Sarah Lee',
      date: '2024-11-14',
      content:
        'Superfoods like berries, nuts, and greens are nutrient-packed and can boost your overall health.',
      tags: ['Nutrition', 'Diet', 'Superfoods'],
    },
  ];
}
