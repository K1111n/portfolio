import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [CommonModule, TranslocoModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  private translocoService = inject(TranslocoService);
  
  menuOpen = false;
  currentLanguage = 'en';

  ngOnInit() {
    this.currentLanguage = this.translocoService.getActiveLang();
  }

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
    this.translocoService.setActiveLang(lang);
    
    if (this.menuOpen) {
      this.toggleMenu();
    }
  }
}