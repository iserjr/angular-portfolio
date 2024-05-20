import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';



@Component({
  selector: 'app-color-changer',
  standalone: true,
  imports: [FormsModule, ColorPickerModule],
  templateUrl: './color-changer.component.html',
  styleUrl: './color-changer.component.scss'
})
export class ColorChangerComponent {
  color1: any = "var(--primary)";
  color2: any = "var(--primary-10)";
  background: any = "var(--white)";
  style = getComputedStyle(document.body);

  public updateColors(color: any, variable: string){
    document.documentElement.style.setProperty(variable, color);
  }

  public invertColors(){
    var aux: any = this.color1;
    this.color1 = this.color2;
    this.color2 = aux;

    this.updateColors(this.color1, "--primary");
    this.updateColors(this.color2, "--primary-10");
  }
}