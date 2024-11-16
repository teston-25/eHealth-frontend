import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  text = '';
  lists: string[] = ['test1', 'test2', 'test3', 'test4'];
  onChange(event: Event) {
    event.preventDefault();
    console.log(event.target);
  }

  onSubmitSearch(event: Event) {
    event.preventDefault();
    alert('submitted Succsesfully!');
    this.text = '';
  }
}
