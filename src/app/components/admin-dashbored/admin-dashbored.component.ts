import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashbored',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashbored.component.html',
  styleUrl: './admin-dashbored.component.css',
})
export class AdminDashboardComponent {
  activeSection: {
    [key in 'home' | 'user' | 'app' | 'blog' | 'financ']: boolean;
  } = {
    home: true,
    user: false,
    app: false,
    blog: false,
    financ: false,
  };

  // Method to handle section changes
  onSectionChange(section: 'home' | 'user' | 'app' | 'blog' | 'financ'): void {
    // Reset all sections to false
    for (let key in this.activeSection) {
      this.activeSection[key as 'home' | 'user' | 'app' | 'blog' | 'financ'] =
        false;
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
    this.bar?.classList.remove('w-16');
    this.bar?.classList.add('w-52');
    this.nav?.classList.remove('hidden');
    this.ham?.classList.add('hidden');
    this.off?.classList.remove('hidden');
  }

  offMenu() {
    this.bar?.classList.add('w-16');
    this.bar?.classList.remove('w-52');
    this.nav?.classList.add('hidden');
    this.ham?.classList.remove('hidden');
    this.off?.classList.add('hidden');
  }
  //home
  totalUsers = 1000;
  activeUsers = 150;
  appointmentsToday = 45;
  revenueSummary = 3200;

  //users
  // User data for tables
  doctors = [
    { name: 'Dr. John Brooks', specialty: 'Cardiology' },
    { name: 'Dr. Adel Smith', specialty: 'Dermatology' },
  ];

  patients = [
    { name: 'Jalen Johnson', age: 34 },
    { name: 'Mickel kebron', age: 45 },
  ];

  // appointment
  appointmentsData = {
    doctors: [
      {
        doctorId: 1,
        name: 'Dr. John Doe',
        specialty: 'Cardiologist',
        appointments: [
          {
            appointmentId: 101,
            patientName: 'Alice Smith',
            date: '2024-12-15',
            time: '10:00 AM',
            status: 'Confirmed', // or 'Pending', 'Cancelled'
            patientContact: '555-1234',
            patientEmail: 'alice@example.com',
          },
          {
            appointmentId: 102,
            patientName: 'Bob Johnson',
            date: '2024-12-16',
            time: '11:30 AM',
            status: 'Pending',
            patientContact: '555-5678',
            patientEmail: 'bob@example.com',
          },
        ],
      },
      {
        doctorId: 2,
        name: 'Dr. Jane Smith',
        specialty: 'Dermatologist',
        appointments: [
          {
            appointmentId: 103,
            patientName: 'Charlie Brown',
            date: '2024-12-17',
            time: '02:00 PM',
            status: 'Confirmed',
            patientContact: '555-8765',
            patientEmail: 'charlie@example.com',
          },
          {
            appointmentId: 104,
            patientName: 'Diana Green',
            date: '2024-12-18',
            time: '09:30 AM',
            status: 'Cancelled',
            patientContact: '555-4321',
            patientEmail: 'diana@example.com',
          },
        ],
      },
    ],

    patients: [
      {
        patientId: 1,
        name: 'Alice Smith',
        appointments: [
          {
            appointmentId: 101,
            doctorName: 'Dr. John Doe',
            specialty: 'Cardiologist',
            date: '2024-12-15',
            time: '10:00 AM',
            status: 'Confirmed',
          },
          {
            appointmentId: 105,
            doctorName: 'Dr. Jane Smith',
            specialty: 'Dermatologist',
            date: '2024-12-20',
            time: '03:00 PM',
            status: 'Pending',
          },
        ],
      },
      {
        patientId: 2,
        name: 'Bob Johnson',
        appointments: [
          {
            appointmentId: 102,
            doctorName: 'Dr. John Doe',
            specialty: 'Cardiologist',
            date: '2024-12-16',
            time: '11:30 AM',
            status: 'Pending',
          },
        ],
      },
      {
        patientId: 3,
        name: 'Charlie Brown',
        appointments: [
          {
            appointmentId: 103,
            doctorName: 'Dr. Jane Smith',
            specialty: 'Dermatologist',
            date: '2024-12-17',
            time: '02:00 PM',
            status: 'Confirmed',
          },
        ],
      },
    ],
  };

  //financial
  financialData = {
    totalRevenue: 150000, // Total revenue for the current period
    totalExpenses: 75000, // Total expenses for the current period
    netProfit: 75000, // Total profit (Revenue - Expenses)
    monthlyRevenue: [
      // Revenue per month
      { month: 'January', amount: 12000 },
      { month: 'February', amount: 15000 },
      { month: 'March', amount: 18000 },
      { month: 'April', amount: 11000 },
      { month: 'May', amount: 14000 },
      { month: 'June', amount: 16000 },
      { month: 'July', amount: 17000 },
      { month: 'August', amount: 13000 },
      { month: 'September', amount: 11000 },
      { month: 'October', amount: 12500 },
      { month: 'November', amount: 14000 },
      { month: 'December', amount: 16000 },
    ],
    monthlyExpenses: [
      // Expenses per month
      { month: 'January', amount: 6000 },
      { month: 'February', amount: 8000 },
      { month: 'March', amount: 7500 },
      { month: 'April', amount: 5000 },
      { month: 'May', amount: 6500 },
      { month: 'June', amount: 7000 },
      { month: 'July', amount: 7200 },
      { month: 'August', amount: 5500 },
      { month: 'September', amount: 5000 },
      { month: 'October', amount: 5700 },
      { month: 'November', amount: 6000 },
      { month: 'December', amount: 7000 },
    ],
    totalUsers: 3500, // Total number of users/customers
    activeUsers: 3000, // Number of active users
    subscriptions: 2800, // Number of subscription plans active
    churnRate: 0.12, // Percentage of users who left in the period
    averageRevenuePerUser: 42, // Average revenue per user (ARPU)
    conversionRate: 0.05, // Conversion rate (percentage of visitors who become paying users)
    lifetimeValue: 125, // Customer lifetime value (LTV)
    outstandingInvoices: 20000, // Total outstanding invoices amount
    paidInvoices: 120000, // Total paid invoices amount
    profitMargin: 0.5, // Profit margin (Revenue - Expenses) / Revenue
    topSellingProducts: [
      // Top-selling products/services for the period
      { product: 'Product A', amount: 30000 },
      { product: 'Product B', amount: 25000 },
      { product: 'Service X', amount: 20000 },
    ],
    accountsReceivable: 25000, // Total money owed by customers
    accountsPayable: 15000, // Total money owed to suppliers/vendors
    taxRate: 0.18, // Tax rate applied on revenue
    taxesCollected: 27000, // Total taxes collected
    taxesPaid: 13000, // Total taxes paid
  };

  // blogs
  blogsData = {
    blogs: [
      {
        blogId: 1,
        title: 'The Importance of Healthy Living',
        content:
          'Healthy living is essential for maintaining overall well-being. It includes regular exercise, balanced nutrition, and mental health awareness.',
        author: 'Dr. John Doe',
        published: true,
        date: '2024-12-10',
        likes: 45,
        comments: [
          {
            commentId: 1,
            userName: 'Alice',
            comment: 'Great article! I need to start exercising more.',
          },
          {
            commentId: 2,
            userName: 'Bob',
            comment:
              'I completely agree with the importance of mental health. Thanks for sharing!',
          },
        ],
      },
      {
        blogId: 2,
        title: 'Top 5 Tips for Better Sleep',
        content:
          "Getting a good night's sleep is crucial for health. In this blog, we cover some tips to improve your sleep quality.",
        author: 'Dr. Jane Smith',
        published: false,
        date: '2024-12-11',
        likes: 32,
        comments: [
          {
            commentId: 3,
            userName: 'Charlie',
            comment: "I need this! I've been struggling with sleep lately.",
          },
        ],
      },
      {
        blogId: 3,
        title: 'Nutrition for Beginners',
        content:
          'Nutrition is a key part of a healthy lifestyle. In this post, we break down the basics of healthy eating.',
        author: 'Dr. John Doe',
        published: true,
        date: '2024-12-12',
        likes: 58,
        comments: [],
      },
    ],
  };

  showCommentsFor: number | null = null;
  newComment: string = '';

  // Toggle blog publish status
  togglePublish(blogId: number) {
    const blog = this.blogsData.blogs.find((b) => b.blogId === blogId);
    if (blog) {
      blog.published = !blog.published;
    }
  }

  // Increase likes count
  likePost(blogId: number) {
    const blog = this.blogsData.blogs.find((b) => b.blogId === blogId);
    if (blog) {
      blog.likes += 1;
    }
  }

  // View comments for a specific blog
  viewComments(blogId: number) {
    this.showCommentsFor = this.showCommentsFor === blogId ? null : blogId;
  }

  // Add a new comment to the blog
  addComment(blogId: number) {
    const blog = this.blogsData.blogs.find((b) => b.blogId === blogId);
    if (blog && this.newComment.trim()) {
      blog.comments.push({
        commentId: blog.comments.length + 1,
        userName: 'Admin', // or dynamically use logged in user's name
        comment: this.newComment,
      });
      this.newComment = ''; // Clear the input field after adding a comment
    }
  }
}
