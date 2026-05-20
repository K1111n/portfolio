import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-about-me',
  imports: [TranslocoPipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {}