import { Component, signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  panelOpenState = false;
  public arrayExperiences = signal<IExperiences[]>([
    {
      title: {
        strong: "Estágiario Desenvolvimento Web",
        p: "HG Digital | Mar 2022 - Out 2022"
      },
      text: "<p>Na HG Digital, marco inicial da minha trajetória profissional, mergulhei em um aprendizado abrangente que englobava front-end em desenvolvimento web.</p><p>Essa empresa se revelou uma verdadeira escola inicial, onde absorvi conhecimentos variados. No front-end, desenvolvi habilidades com Html5, Css, Javascript, Angular e Flutter. </p>"
    },
  ])
}