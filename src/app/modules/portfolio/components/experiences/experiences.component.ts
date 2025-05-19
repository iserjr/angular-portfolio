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
    {
      title: {
        strong: "Estágiario Desenvolvimento de Software",
        p: "FIEMG Centro 4.0 | Jun 2024 - Mai 2025"
      },
      text: "<p>Durante o estágio, atuei no desenvolvimento de soluções tecnológicas voltadas para a Indústria 4.0, participando de projetos multidisciplinares com foco em inovação, automação e conectividade industrial.</p><p> Trabalhei com tecnologias como React e Swift para o desenvolvimento de interfaces web e mobile; Python e Java na construção de backends, processamento de dados e integração de sistemas; além de Node.js e Node-Red para aplicações de IoT e automação de processos industriais.</p><p>Realizei também a modelagem e manipulação de dados com MySQL, contribuindo para a estruturação de bancos de dados relacionais em ambientes produtivos. A experiência proporcionou uma visão abrangente da aplicação prática de tecnologias emergentes em ambientes industriais reais.</p>"
    },
  ])
}