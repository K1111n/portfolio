import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  menuOpen = false;
  currentLanguage = 'en';

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  switchLanguage(lang: string): void {
    this.currentLanguage = lang;
    console.log('Language switched to:', lang);
    
    if (this.menuOpen) {
      this.toggleMenu();
    }
  }
}