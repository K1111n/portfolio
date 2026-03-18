import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

interface Skill {
  icon: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  scrollToContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  skillRows: Skill[][] = [
    [
      { icon: '/assets/skills/IconHtml.png', alt: 'html', label: 'HTML' },
      { icon: '/assets/skills/IconCss.png', alt: 'css', label: 'CSS' },
      { icon: '/assets/skills/IconJavaScript.png', alt: 'javascript', label: 'JavaScript' },
      { icon: '/assets/skills/IconTypescript.png', alt: 'typescript', label: 'TypeScript' },
    ],
    [
      { icon: '/assets/skills/IconAngular.png', alt: 'angular', label: 'Angular' },
      { icon: '/assets/skills/IconFirebase.png', alt: 'firebase', label: 'Firebase' },
      { icon: '/assets/skills/IconGit.png', alt: 'git', label: 'Git' },
      { icon: '/assets/skills/IconApi.png', alt: 'api', label: 'REST APIs' },
    ],
    [
      { icon: '/assets/skills/IconScrum.png', alt: 'scrum', label: 'Scrum' },
      { icon: '/assets/skills/IconMaterialDesign.png', alt: 'materialdesign', label: 'Material Design' },
    ],
    [
      { icon: '/assets/skills/IconContinuallyLearning.png', alt: 'learning', label: 'Continually learning' },
    ],
  ];
}