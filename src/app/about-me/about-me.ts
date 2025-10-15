import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-about-me',
  imports: [TranslocoModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})
export class AboutMe {}