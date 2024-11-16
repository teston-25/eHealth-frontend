import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docter-role',
  standalone: true,
  imports: [FooterComponent, FormsModule],
  templateUrl: './docter-role.component.html',
  styleUrl: './docter-role.component.css',
})
export class DocterRoleComponent {
  authorName = 'Mr.Teston';
  specialty = 'Phsician';
  address = 'Avenu, Gabon street SS12-89-67 ';
  phone = +25197 - 11 - 23 - 45;
  bio = '';
}
