import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IFormations.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/conhecimentos/html.svg',
      alt: 'Ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/conhecimentos/css.svg',
      alt: 'Ícone de conhecimento de css',
    },
    {
      src: 'assets/icons/conhecimentos/js.svg',
      alt: 'Ícone de conhecimento de js',
    },
    {
      src: 'assets/icons/conhecimentos/node.svg',
      alt: 'Ícone de conhecimento de node',
    },
    {
      src: 'assets/icons/conhecimentos/c.svg',
      alt: 'Ícone de conhecimento de c',
    },
    {
      src: 'assets/icons/conhecimentos/angular.svg',
      alt: 'Ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/conhecimentos/react.svg',
      alt: 'Ícone de conhecimento de react',
    },
  ])
}
