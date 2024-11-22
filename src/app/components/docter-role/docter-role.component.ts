import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../landing-page/footer/footer.component';

@Component({
  selector: 'app-docter-role',
  standalone: true,
  imports: [FormsModule, CommonModule, FooterComponent],
  templateUrl: './docter-role.component.html',
  styleUrl: './docter-role.component.css',
})
export class DocterRoleComponent {
  doctor = 'Dr. X';
  specialitiy = 'Cardiology';
  comments = [{ title: 'test', content: 'teston is testing' }];
  appointments = [
    {
      date: '2024-11-21',
      time: '10:00 AM',
      patientName: 'John Doe',
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
      patientName: 'John Doe',
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
      patientName: 'John Doe',
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
      patientName: 'John Doe',
      doctor: 'Dr. Smith',
    },
    {
      date: '2024-11-22',
      time: '11:30 AM',
      patientName: 'Jane Smith',
      doctor: 'Dr. Williams',
    },
  ];

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

  contacts = [
    {
      id: 1,
      name: 'Dr. Sarah',
      specialty: 'Cardiologist',
      profilePic: 'sarah.png',
    },
    {
      id: 2,
      name: 'John Mike',
      specialty: 'Patient',
      profilePic: 'john.png',
    },
    {
      id: 3,
      name: 'Mike Vanico',
      specialty: 'Patient',
      profilePic: 'mike.png',
    },
  ];

  messages = [
    { sender: 'Dr. Sarah', text: 'Hello, how can I help you?' },
    { sender: 'Me', text: 'I have a question about my appointment.' },
  ];

  chatNotifications = [
    {
      userId: 1,
      message: 'Hey! How are you?',
      timestamp: '2024-11-21T10:00:00Z',
    },
    {
      userId: 2,
      message: 'Can we reschedule our meeting?',
      timestamp: '2024-11-21T11:30:00Z',
    },
    {
      userId: 3,
      message: "Don't forget the documents for tomorrow.",
      timestamp: '2024-11-20T16:45:00Z',
    },
    {
      userId: 4,
      message: 'Thanks for your help earlier!',
      timestamp: '2024-11-20T14:20:00Z',
    },
    {
      userId: 5,
      message: 'Are you available for a quick call?',
      timestamp: '2024-11-21T09:15:00Z',
    },
  ];
  commentNotifications = [
    {
      userId: 6,
      message: "John commented: 'This is amazing work!'",
      postId: 101,
      timestamp: '2024-11-20T18:00:00Z',
    },
    {
      userId: 7,
      message: "Alice replied to your comment: 'I totally agree!'",
      postId: 102,
      timestamp: '2024-11-21T08:15:00Z',
    },
    {
      userId: 8,
      message: "Mark commented: 'Can you share more details?'",
      postId: 103,
      timestamp: '2024-11-20T20:45:00Z',
    },
    {
      userId: 9,
      message: 'Sara liked your comment on her post.',
      postId: 104,
      timestamp: '2024-11-21T07:30:00Z',
    },
    {
      userId: 10,
      message: 'Your comment received 5 new likes.',
      postId: 105,
      timestamp: '2024-11-19T22:10:00Z',
    },
  ];

  paymentNotifications = [
    {
      userId: 11,
      message: 'Your payment of $50 has been successfully processed.',
      paymentId: 'PAY12345',
      timestamp: '2024-11-21T10:45:00Z',
    },
    {
      userId: 12,
      message: 'Reminder: Your subscription payment is due tomorrow.',
      paymentId: 'PAY12346',
      timestamp: '2024-11-20T13:00:00Z',
    },
    {
      userId: 13,
      message: 'Refund of $20 has been initiated to your account.',
      paymentId: 'PAY12347',
      timestamp: '2024-11-20T15:30:00Z',
    },
    {
      userId: 14,
      message: 'Transaction failed. Please check your payment details.',
      paymentId: 'PAY12348',
      timestamp: '2024-11-21T09:50:00Z',
    },
    {
      userId: 15,
      message: 'Your order payment of $100 is confirmed.',
      paymentId: 'PAY12349',
      timestamp: '2024-11-20T17:25:00Z',
    },
  ];

  appointmentNotifications = [
    {
      id: 1,
      patientName: 'John Doe',
      doctorName: 'Dr. Sarah Connor',
      appointmentTime: '2024-11-22T10:00:00',
      status: 'Scheduled',
      notificationMessage:
        'You have an appointment scheduled with Dr. Sarah Connor at 10:00 AM tomorrow.',
    },
    {
      id: 2,
      patientName: 'Alice Johnson',
      doctorName: 'Dr. Mark Johnson',
      appointmentTime: '2024-11-22T11:30:00',
      status: 'Scheduled',
      notificationMessage:
        'Your appointment with Dr. Mark Johnson is scheduled for 11:30 AM tomorrow.',
    },
    {
      id: 3,
      patientName: 'Michael Smith',
      doctorName: 'Dr. Emily Davis',
      appointmentTime: '2024-11-22T14:00:00',
      status: 'Scheduled',
      notificationMessage:
        'You have an appointment with Dr. Emily Davis at 2:00 PM tomorrow.',
    },
    {
      id: 4,
      patientName: 'Sophia Williams',
      doctorName: 'Dr. Daniel Green',
      appointmentTime: '2024-11-23T09:00:00',
      status: 'Scheduled',
      notificationMessage:
        'Reminder: Your appointment with Dr. Daniel Green is scheduled for 9:00 AM tomorrow.',
    },
    {
      id: 5,
      patientName: 'David Brown',
      doctorName: 'Dr. Alice Carter',
      appointmentTime: '2024-11-23T15:30:00',
      status: 'Scheduled',
      notificationMessage:
        'You have an upcoming appointment with Dr. Alice Carter at 3:30 PM tomorrow.',
    },
  ];

  //blogs
  showAddBlogForm = false;
  newBlog = { title: '', content: '' };

  addBlog() {
    this.blogs.push({ ...this.newBlog });
    this.newBlog = { title: '', content: '' };
    this.showAddBlogForm = false;
  }

  //chat
  selectedContact: any = null;
  newMessage: string = '';
  searchQuery: string = '';

  ngOnInit(): void {}

  selectContact(contact: any): void {
    this.selectedContact = contact;
    this.messages = [
      { sender: contact.name, text: `Hi, this is ${contact.name}` },
    ];
  }

  // Filter contacts based on the search query
  get filteredContacts() {
    return this.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Send a message and add it to the chat history
  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.messages.push({ sender: 'Me', text: this.newMessage });
      this.newMessage = '';
    }
  }
  //Notification
  btnStates = {
    chat: '➕',
    comment: '➕',
    payment: '➕',
    appointment: '➕',
  };

  onState = {
    chat: true,
    comment: true,
    payment: true,
    appointment: true,
  };

  toggleState(type: 'chat' | 'comment' | 'payment' | 'appointment') {
    this.onState[type] = !this.onState[type];
    this.btnStates[type] = this.onState[type] ? '➕' : '✖️';
  }

  onChat() {
    this.toggleState('chat');
  }
  onComment() {
    this.toggleState('comment');
  }

  onPay() {
    this.toggleState('payment');
  }

  onAppoint() {
    this.toggleState('appointment');
  }
  //contact
  email = 'support@gmail.com';
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Here you would typically send the form data to the server
    console.log('Form Submitted:', this.contactForm);
    // Reset the form after submission
    this.contactForm = { name: '', email: '', message: '' };
  }

  //profile
  onEditing = false;

  onEdit() {
    this.onEditing = true;
  }

  offEdit() {
    this.onEditing = false;
  }
}
