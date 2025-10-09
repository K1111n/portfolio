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

  onSubmit(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    if (!this.privacyAccepted) {
      alert('Please accept the privacy policy');
      return;
    }

    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      alert('Please fill in all fields');
      return;
    }

    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    this.privacyAccepted = false;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}