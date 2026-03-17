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
      text: "Kajanan zeichnet sich durch effizienten, sauberen und gut strukturierten Code aus. Er arbeitet äußerst zuverlässig, hält Deadlines ein und findet auch unter Druck pragmatische Lösungen. Seine technische Präzision und seine ruhige, professionelle Arbeitsweise machen ihn zu einem Teammitglied, auf das man sich jederzeit verlassen kann.",
      author: "Daniel L.",
      image: "/assets/i18n/profile-pictures/daniel_1.png"
    },
    {
      text: "Wer mit Kajanan arbeitet, merkt sofort seine Zuverlässigkeit und seine starke Problemlösungsfähigkeit. Im Team hat er sich mühelos integriert und durch seine offene Art viel zur positiven Stimmung beigetragen. Die Zusammenarbeit mit ihm hat wirklich Spaß gemacht.",
      author: "Patrick Sch.",
      image: "/assets/i18n/profile-pictures/Proffessional_working_image.png"
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