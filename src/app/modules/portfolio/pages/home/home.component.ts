import { Component } from '@angular/core';


import { HeaderComponent } from '../../components/header/header.component';
import { FormationsComponent } from '../../components/formations/formations.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FormationsComponent, ExperiencesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
