import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { Project } from "../portfolio";

@Component({
  selector: 'app-project',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class ProjectComp {
  @Input() project!: Project;
  @Input() index: number = 0;
}
