import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EDUCATION } from '../../core/data/experience.data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  readonly education = EDUCATION;
}
