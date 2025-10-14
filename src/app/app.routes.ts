import { Routes } from '@angular/router';
import { Impressum } from './impressum/impressum';
import { PrivacyPolicy } from './privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: 'impressum', component: Impressum },
  { path: 'privacy-policy', component: PrivacyPolicy },
];
