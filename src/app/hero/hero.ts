import { Component } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-hero',
  imports: [TranslocoModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  scrollToContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAboutMe(event: Event): void {
    event.preventDefault();
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  }
}