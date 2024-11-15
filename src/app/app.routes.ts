import { Routes } from '@angular/router';
import { MainBodyComponent } from './components/homepage/main-body.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FaqComponent } from './components/faq/faq.component';

export const routes: Routes = [
  { path: '', component: MainBodyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faq', component: FaqComponent },
];
