import { Component } from '@angular/core';
import { HeaderComponent } from '../landing-page/header/header.component';
import { FooterComponent } from '../landing-page/footer/footer.component';

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
