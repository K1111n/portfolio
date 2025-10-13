import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  icon: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {

  skillRows: Skill[][] = [
    [
      { icon: '/IconHtml.png', alt: 'html', label: 'HTML' },
      { icon: '/IconCss.png', alt: 'css', label: 'CSS' },
      { icon: '/IconJavaScript.png', alt: 'javascript', label: 'JavaScript' },
      { icon: '/IconTypescript.png', alt: 'typescript', label: 'TypeScript' },
    ],
    [
      { icon: '/IconAngular.png', alt: 'angular', label: 'Angular' },
      { icon: '/IconFirebase.png', alt: 'firebase', label: 'Firebase' },
      { icon: '/IconGit.png', alt: 'git', label: 'Git' },
      { icon: '/IconApi.png', alt: 'api', label: 'REST APIs' },
    ],
    [
      { icon: '/IconScrum.png', alt: 'scrum', label: 'Scrum' },
      { icon: '/IconMaterialDesign.png', alt: 'materialdesign', label: 'Material Design' },
    ],
    [
      { icon: '/skills-interest.png', alt: 'learning', label: 'Continually learning' },
    ],
  ];

}
