import { Component, Input } from '@angular/core';
import { Project } from "../portfolio";

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class ProjectComp {
  @Input() project!: Project;
  @Input() index: number = 0;

  openLink(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
}
