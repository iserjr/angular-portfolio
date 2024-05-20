import { Component } from '@angular/core';


import { HeaderComponent } from '../../components/header/header.component';
import { FormationsComponent } from '../../components/formations/formations.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ProjectsComponent } from '../../components/projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormationsComponent, ExperiencesComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
