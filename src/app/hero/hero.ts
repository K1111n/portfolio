import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, HostListener } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  imports: [TranslocoModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit, OnDestroy {
  @ViewChild('verticalText') verticalText!: ElementRef<HTMLElement>;
  @ViewChild('heroTitle') heroTitle!: ElementRef<HTMLElement>;
  @ViewChild('lastName') lastName!: ElementRef<HTMLElement>;

  private translocoService = inject(TranslocoService);
  private langSub!: Subscription;

  ngAfterViewInit() {
    setTimeout(() => this.adjustFontSize(), 100);
    this.langSub = this.translocoService.langChanges$.subscribe(() => {
      setTimeout(() => this.adjustFontSize(), 100);
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustFontSize();
  }

  private adjustFontSize() {
    const el = this.verticalText?.nativeElement;
    const h1 = this.heroTitle?.nativeElement;
    if (!el || !h1) return;

    if (window.innerWidth < 1000) {
      el.style.fontSize = '';
      el.style.height = '';
      const lastNameEl = this.lastName?.nativeElement;
      if (lastNameEl) {
        const yogaRect = lastNameEl.getBoundingClientRect();
        const elRect = el.getBoundingClientRect();
        const yogaCenterY = yogaRect.top + yogaRect.height / 2;
        const elCenterY = elRect.top + elRect.height / 2;
        const currentMargin = parseFloat(el.style.marginTop) || 0;
        el.style.marginTop = (currentMargin + yogaCenterY - elCenterY) + 'px';
      }
      return;
    }

    el.style.marginTop = '';
    const h1Height = h1.offsetHeight;
    if (!h1Height) return;

    // Disable flex-stretch so we measure the natural text height
    el.style.alignSelf = 'flex-start';
    el.style.fontSize = '100px';
    const naturalHeight = el.offsetHeight;
    el.style.alignSelf = '';

    if (!naturalHeight) return;

    el.style.fontSize = `${100 * (h1Height / naturalHeight)}px`;
    el.style.height = `${h1Height}px`;
  }

  ngOnDestroy() {
    this.langSub?.unsubscribe();
  }

  scrollToContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAboutMe(event: Event): void {
    event.preventDefault();
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  }
}
