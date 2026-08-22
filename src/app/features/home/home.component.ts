import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ProjectListComponent } from '../projects/project-list/project-list.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ProjectListComponent, ExperienceComponent, EducationComponent, ContactComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
