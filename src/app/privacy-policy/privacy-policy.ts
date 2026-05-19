import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink, TranslocoModule],
  templateUrl: './privacy-policy.html',
  styleUrls: ['./privacy-policy.scss']
})
export class PrivacyPolicy {}
