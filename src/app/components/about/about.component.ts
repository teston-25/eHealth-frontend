import { Component } from '@angular/core';
import { FooterComponent } from '../landing-page/footer/footer.component';
import { HeaderComponent } from '../landing-page/header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
