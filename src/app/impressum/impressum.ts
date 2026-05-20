import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  selector: 'app-impressum',
  imports: [RouterLink, TranslocoPipe],
  templateUrl: './impressum.html',
  styleUrls: ['./impressum.scss']
})
export class Impressum {}
