import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, Router } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslationLoader } from './services/translation-loader';

import { ElectronService } from 'ngx-electron';

/*
export const appConfig: ApplicationConfig = {
  providers:
    [
      provideRouter(routes),
      provideAnimations()
    ]
};
*/

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideRouter(routes),
      provideAnimations(),
      provideHttpClient(withFetch()) ,
      provideHttpClient(),
      importProvidersFrom(HttpClientModule),
      importProvidersFrom
      (
        TranslateModule.forRoot(
          {
            loader:
              {
                provide: TranslateLoader,
                useFactory: createResourceLoader,
                deps: [HttpClient , Router]
              },
            defaultLanguage : 'en'
          })
      ),
      ElectronService
    ]
};

export function createResourceLoader(http: HttpClient) {
  return new TranslationLoader(http);
}

