import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent {
  selectedContact: any = null;
  newMessage: string = '';
  searchQuery: string = '';

  contacts = [
    {
      id: 1,
      name: 'Dr. Sarah',
      specialty: 'Cardiologist',
      profilePic: 'sarah.png',
    },
    { id: 2, name: 'John Doe', specialty: 'Patient', profilePic: 'john.png' },
    {
      id: 3,
      name: 'Dr. Mike',
      specialty: 'Dermatologist',
      profilePic: 'mike.png',
    },
  ];

  messages = [
    { sender: 'Dr. Sarah', text: 'Hello, how can I help you?' },
    { sender: 'Me', text: 'I have a question about my appointment.' },
  ];

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
}
