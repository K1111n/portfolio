import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { isDevMode } from '@angular/core';

export const translocoConfig = provideTransloco({
  config: {
    availableLangs: ['en', 'de'],
    defaultLang: 'en',
    reRenderOnLangChange: true,
    prodMode: !isDevMode(),
  },
  loader: TranslocoHttpLoader
});