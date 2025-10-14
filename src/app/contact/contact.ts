import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
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

  onSubmit(event?: Event): void {
    this.validateName();
    this.validateEmail();
    this.validateMessage();

    if (!this.isFormValid()) {
      if (event) {
        event.preventDefault();
      }
      return;
    }
    
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}