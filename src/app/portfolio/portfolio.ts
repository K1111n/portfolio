import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComp } from "./project/project";

export interface Project {
  title: string;
  image: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [ProjectComp, CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  projects: Project[] = [
    {
      title: 'El Pollo Loco',
      image: '/LaptopPolloLoco.png'
    },
    {
      title: 'Join',
      image: '/LaptopJoin.png'
    },
    {
      title: 'Da Bubble',
      image: '/LaptopDabubble.png'
    },
    {
      title: 'Pokedex',
      image: '/LaptopPokedex.png'
    },
  ];
}