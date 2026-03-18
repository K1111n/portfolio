import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComp } from "./project/project";
import { TranslocoModule } from '@jsverse/transloco';

export interface Project {
  title: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [ProjectComp, CommonModule, TranslocoModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  projects: Project[] = [
    {
      title: 'El Pollo Loco',
      image: '/assets/portfolio/LaptopPolloLoco.png'
    },
    {
      title: 'Join',
      image: '/assets/portfolio/LaptopJoin.png'
    },
    {
      title: 'Da Bubble',
      image: '/assets/portfolio/LaptopDabubble.png'
    },
    {
      title: 'Pokedex',
      image: '/assets/portfolio/LaptopPokedex.png'
    },
  ];
}