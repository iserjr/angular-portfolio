import { Component, inject, signal } from '@angular/core';
import { withDebugTracing } from '@angular/router';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/projects/lista-de-tarefas.png",
      alt: "Projeto Lista de Tarefas",
      title: "Lista de Tarefas",
      width: "100px",
      height: "51px",
      description: "",
      links: [
        {
          name: "Acesse o projeto!",
          href: "",
        }
      ]
    },
  ])

}
