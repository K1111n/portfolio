import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComp } from "./project/project";
import { TranslocoModule } from '@jsverse/transloco';

export interface Project {
  title: string;
  image: string;
  link?: string;
  githubLink?: string;
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
      image: '/assets/portfolio/LaptopPolloLoco.png',
      link: 'https://jump-and-run-el-pollo-loco.netlify.app/',
      githubLink: 'https://github.com/K1111n/jump-and-run-game'
    },
    {
      title: 'Join',
      image: '/assets/portfolio/LaptopJoin.png',
      link: 'https://join-3ba5a.web.app/',
      githubLink: 'https://github.com/K1111n/join'
    },
    {
      title: 'Coderr',
      image: '/assets/portfolio/LaptopCoderr.png',
      link: 'https://coderr-kajanan-yoganathan.netlify.app/',
      githubLink: 'https://github.com/K1111n/Coderr-Backend'
    },
    {
      title: 'Videoflix',
      image: '/assets/portfolio/LaptopVideoflix.png',
      link: 'https://videoflix-kajanan-yoganathan.netlify.app/',
      githubLink: 'https://github.com/K1111n/videoflix_backend'
    },
  ];
}