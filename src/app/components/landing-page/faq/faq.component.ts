import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  //faq
  faqs = [
    {
      question: 'What is the eHealth platform?',
      answer:
        'The eHealth platform is a digital solution that provides healthcare services such as consultations, medical records management, and health monitoring tools.',
      open: false,
    },
    {
      question: 'How can I book a consultation?',
      answer:
        'You can book a consultation by logging into your account, navigating to the "Appointments" section, and selecting your preferred doctor and time slot.',
      open: false,
    },
    {
      question: 'Is my medical data secure?',
      answer:
        'Yes, we use industry-standard encryption and data security measures to protect your medical records and personal information.',
      open: false,
    },
    {
      question: 'Can I access the platform on my mobile device?',
      answer:
        'Absolutely! The eHealth platform is mobile-friendly and available as a mobile app for both Android and iOS.',
      open: false,
    },
  ];
}
