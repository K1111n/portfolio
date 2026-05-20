import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RouterLink, TranslocoPipe],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  
  privacyAccepted = false;
  nameError = false;
  emailError = false;
  messageError = false;
  nameBlurred = false;
  emailBlurred = false;
  messageBlurred = false;

  validateName(): void {
    this.nameBlurred = true;
    this.nameError = !this.formData.name || this.formData.name.trim() === '';
  }

  validateEmail(): void {
    this.emailBlurred = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    this.emailError = !this.formData.email || !emailPattern.test(this.formData.email);
  }

  validateMessage(): void {
    this.messageBlurred = true;
    this.messageError = !this.formData.message || this.formData.message.trim() === '';
  }

  isFormValid(): boolean {
    return (
      this.formData.name.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.message.trim() !== '' &&
      this.privacyAccepted &&
      !this.nameError &&
      !this.emailError &&
      !this.messageError
    );
  }

  submitted = false;
  submitError = false;
  isSubmitting = false;

  async onSubmit(event?: Event): Promise<void> {
    if (event) event.preventDefault();

    this.validateName();
    this.validateEmail();
    this.validateMessage();

    if (!this.isFormValid()) return;

    this.isSubmitting = true;
    this.submitError = false;

    try {
      const response = await fetch('https://formspree.io/f/xwprwdyj', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: JSON.stringify(this.formData),
      });

      if (response.ok) {
        this.submitted = true;
        this.formData = { name: '', email: '', message: '' };
        this.privacyAccepted = false;
        this.nameBlurred = false;
        this.emailBlurred = false;
        this.messageBlurred = false;
        setTimeout(() => { this.submitted = false; }, 4000);
      } else {
        this.submitError = true;
      }
    } catch {
      this.submitError = true;
    } finally {
      this.isSubmitting = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  }
}