import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { DocterRoleComponent } from './components/docter-role/docter-role.component';
import { MainBodyComponent } from './components/landing-page/homepage/main-body.component';
import { LoginComponent } from './components/landing-page/login/login.component';
import { SignupComponent } from './components/landing-page/signup/signup.component';
import { BlogsComponent } from './components/landing-page/blogs/blogs.component';

export const routes: Routes = [
  { path: '', component: DocterRoleComponent },
  // { path: '', component: MainBodyComponent } ,
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'doc', component: DocterRoleComponent },
];
