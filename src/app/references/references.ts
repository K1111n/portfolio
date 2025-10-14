import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  text: string;
  author: string;
  image: string;
}

@Component({
  selector: 'app-references',
  imports: [CommonModule],
  templateUrl: './references.html',
  styleUrl: './references.scss'
})
export class References {
  currentIndex = 0;

  testimonials: Testimonial[] = [
    {
      text: "This is an amazing service! Highly recommended.",
      author: "John Doe",
      image: "/no-profile-pic.png"
    },
    {
      text: "A wonderful experience from start to finish.",
      author: "Jane Smith",
      image: "/no-profile-pic.png"
    },
    {
      text: "Professional and efficient, couldn't ask for more.",
      author: "Alice Johnson",
      image: "/no-profile-pic.png"
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