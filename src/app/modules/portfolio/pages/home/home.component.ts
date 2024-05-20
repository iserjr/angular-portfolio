import { Component } from '@angular/core';


import { HeaderComponent } from '../../components/header/header.component';
import { FormationsComponent } from '../../components/formations/formations.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';
import { ColorChangerComponent } from "../../components/color-changer/color-changer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HeaderComponent, FormationsComponent, ExperiencesComponent, ColorChangerComponent]
})
export class HomeComponent {

}
