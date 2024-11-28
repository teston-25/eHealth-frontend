import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BlogsComponent } from '../blogs/blogs.component';
import { FaqComponent } from '../faq/faq.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [
    CommonModule,
    FooterComponent,
    FormsModule,
    HeaderComponent,
    HomeComponent,
    BlogsComponent,
    FaqComponent,
    AboutComponent,
    ContactComponent,
  ],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.css',
})
export class MainBodyComponent {
  text = '';
  searchName: string = '';
  selectedSpecialty: string = '';
  test: boolean = false;
  text_doctors = 'Show Doctors';

  specialitiesNull = [];
  doctors: Array<{
    id: number;
    name: string;
    specialty: string;
    experience: number;
    location: string;
  }> = [];
  showDoctors = false;

  speciality: string[] = [];
  extraSpecialities: string[] = ['Pediatrics', 'Orthopedics'];

  infoDoctors = [
    {
      id: 1,
      name: 'Dr. Alice Johnson',
      experience: 15,
      specialty: 'Cardiology',
      location: 'New York',
    },
    {
      id: 2,
      name: 'Dr. Bob Smith',
      experience: 8,
      specialty: 'Neurology',
      location: 'Los Angeles',
    },
    {
      id: 3,
      name: 'Dr. Charlie Brown',
      experience: 10,
      specialty: 'Orthopedics',
      location: 'Chicago',
    },
    {
      id: 4,
      name: 'Dr. Diana Prince',
      experience: 5,
      specialty: 'Pediatrics',
      location: 'Houston',
    },
    {
      id: 5,
      name: 'Dr. Evan Harris',
      experience: 12,
      specialty: 'Cardiology',
      location: 'Seattle',
    },
    {
      id: 6,
      name: 'Dr. Fiona Adams',
      experience: 7,
      specialty: 'Dermatology',
      location: 'San Francisco',
    },
    {
      id: 7,
      name: 'Dr. George Williams',
      experience: 20,
      specialty: 'General Surgery',
      location: 'Boston',
    },
    {
      id: 8,
      name: 'Dr. Hannah Lee',
      experience: 3,
      specialty: 'Gynecology',
      location: 'Denver',
    },
    {
      id: 9,
      name: 'Dr. Ian Campbell',
      experience: 18,
      specialty: 'Neurology',
      location: 'Miami',
    },
    {
      id: 10,
      name: 'Dr. Julie Carter',
      experience: 14,
      specialty: 'Cardiology',
      location: 'Dallas',
    },
    {
      id: 11,
      name: 'Dr. Kevin Brown',
      experience: 9,
      specialty: 'Orthopedics',
      location: 'Phoenix',
    },
    {
      id: 12,
      name: 'Dr. Laura Parker',
      experience: 11,
      specialty: 'Pediatrics',
      location: 'Seattle',
    },
    {
      id: 13,
      name: 'Dr. Mark Turner',
      experience: 6,
      specialty: 'Dermatology',
      location: 'Austin',
    },
    {
      id: 14,
      name: 'Dr. Nora Wilson',
      experience: 13,
      specialty: 'Gynecology',
      location: 'Atlanta',
    },
    {
      id: 15,
      name: 'Dr. Olivia Martinez',
      experience: 17,
      specialty: 'General Surgery',
      location: 'San Diego',
    },
    {
      id: 16,
      name: 'Dr. Paul White',
      experience: 8,
      specialty: 'Cardiology',
      location: 'Detroit',
    },
    {
      id: 17,
      name: 'Dr. Quentin Harris',
      experience: 5,
      specialty: 'Neurology',
      location: 'Charlotte',
    },
    {
      id: 18,
      name: 'Dr. Rachel Green',
      experience: 20,
      specialty: 'Orthopedics',
      location: 'Portland',
    },
    {
      id: 19,
      name: 'Dr. Samuel Thompson',
      experience: 7,
      specialty: 'Pediatrics',
      location: 'Orlando',
    },
    {
      id: 20,
      name: 'Dr. Tina Collins',
      experience: 4,
      specialty: 'Dermatology',
      location: 'Philadelphia',
    },
    {
      id: 21,
      name: 'Dr. Victor Allen',
      experience: 10,
      specialty: 'General Surgery',
      location: 'San Jose',
    },
    {
      id: 22,
      name: 'Dr. Wendy Scott',
      experience: 15,
      specialty: 'Cardiology',
      location: 'Salt Lake City',
    },
    {
      id: 23,
      name: 'Dr. Xavier Young',
      experience: 11,
      specialty: 'Gynecology',
      location: 'Tampa',
    },
    {
      id: 24,
      name: 'Dr. Yasmin Baker',
      experience: 14,
      specialty: 'Neurology',
      location: 'Baltimore',
    },
    {
      id: 25,
      name: 'Dr. Zachary Davis',
      experience: 6,
      specialty: 'Orthopedics',
      location: 'Minneapolis',
    },
    {
      id: 26,
      name: 'Dr. Angela Bell',
      experience: 12,
      specialty: 'Pediatrics',
      location: 'Kansas City',
    },
    {
      id: 27,
      name: 'Dr. Benjamin Clark',
      experience: 18,
      specialty: 'Dermatology',
      location: 'Cleveland',
    },
    {
      id: 28,
      name: 'Dr. Catherine Moore',
      experience: 9,
      specialty: 'Cardiology',
      location: 'Nashville',
    },
    {
      id: 29,
      name: 'Dr. David Brooks',
      experience: 13,
      specialty: 'General Surgery',
      location: 'Las Vegas',
    },
    {
      id: 30,
      name: 'Dr. Emily Watson',
      experience: 7,
      specialty: 'Neurology',
      location: 'Milwaukee',
    },
  ];

  ngOnInit() {
    this.extractSpecialties();
  }

  extractSpecialties() {
    const uniqueSpecialties = [
      ...new Set(this.infoDoctors.map((doctor) => doctor.specialty)),
    ];
    this.speciality = [
      ...new Set([...uniqueSpecialties, ...this.extraSpecialities]),
    ];
  }

  Dtrs = () => {
    this.showDoctors = !this.showDoctors;
    if (this.showDoctors) {
      this.text_doctors = 'Hide Doctors';
      this.doctors = this.infoDoctors.filter(
        (doctor) => doctor.experience > 15
      );
    } else {
      this.text_doctors = 'Show Doctors';
      this.doctors = [];
    }
  };

  filteredDoctors = this.test ? this.infoDoctors : this.specialitiesNull;
  isFiltering = false;
  handleInput(event: Event) {
    this.searchName = (event.target as HTMLInputElement).value;
    console.log(this.doctors);
  }

  onChangeSpeciality(event: Event) {
    this.selectedSpecialty = (event.target as HTMLSelectElement).value;
    this.test = true;
  }

  filterDoctors() {
    const searchName = this.searchName?.toLowerCase().trim();
    const selectedSpecialty = this.selectedSpecialty?.toLowerCase();

    // Show nothing if there's no search query
    if (!searchName) {
      this.filteredDoctors = [];
      return;
    }

    this.filteredDoctors = this.infoDoctors.filter((doctor) => {
      // Check if name matches the search query
      const matchesName = doctor.name.toLowerCase().includes(searchName);

      // Check if specialty matches (or allow all if 'all' is selected)
      const matchesSpecialty =
        selectedSpecialty === 'all'
          ? true // Show all specialties
          : doctor.specialty.toLowerCase() === selectedSpecialty;

      return matchesName && matchesSpecialty;
    });
  }
}
