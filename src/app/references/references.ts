import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

interface Testimonial {
  textKey: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-references',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  currentIndex = 0;

  testimonials: Testimonial[] = [
    {
      textKey: 'references.testimonial1.text',
      author: 'Daniel L.',
      image: '/assets/i18n/profile-pictures/daniel_1.jpg'
    },
    {
      textKey: 'references.testimonial2.text',
      author: 'Patrick Sch.',
      image: '/assets/i18n/profile-pictures/Proffessional_working_image.jpg'
    }
  ];

  get currentTestimonial(): Testimonial {
    return this.testimonials[this.currentIndex];
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}
