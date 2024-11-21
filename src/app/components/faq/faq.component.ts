import { Component } from '@angular/core';
import { FooterComponent } from '../landing-page/footer/footer.component';
import { HeaderComponent } from '../landing-page/header/header.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {}
