import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-impressum',
  imports: [RouterLink, TranslocoModule],
  templateUrl: './impressum.html',
  styleUrls: ['./impressum.scss']
})
export class Impressum {}
