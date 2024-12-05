import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  doctor = 'Dr. X';
  blogs = [
    {
      title: 'Managing Diabetes',
      content: 'Tips for managing diabetes effectively...',
    },
    {
      title: 'Heart Health',
      content: 'Keep your heart healthy with these simple steps...',
    },
    {
      title: 'Managing Diabetes',
      content: 'Tips for managing diabetes effectively...',
    },
  ];

  //blogs
  showAddBlogForm = false;
  newBlog = { title: '', content: '' };
  blogTxt = 'Add Blog';

  onBlog() {
    if (this.showAddBlogForm == false) {
      this.showAddBlogForm = true;
      this.blogTxt = 'Close Blog';
    } else {
      this.showAddBlogForm = false;
      this.newBlog.title = '';
      this.newBlog.content = '';
      this.blogTxt = 'Add Blog';
    }
  }

  addBlog() {
    this.blogs.push({ ...this.newBlog });
    this.newBlog = { title: '', content: '' };
    this.showAddBlogForm = false;
    this.blogTxt = 'Add Blog';
  }
}
