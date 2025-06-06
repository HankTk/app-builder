import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export class TranslationLoader implements TranslateLoader {

  constructor(
    private http: HttpClient
  ) {
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  public getTranslation(lang: string): Observable<unknown> {
    const path = `./assets/i18n/${lang}.json`;
    return this.http.get(path);
  }

}
