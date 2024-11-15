import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css',
})
export class MainBodyComponent {
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
