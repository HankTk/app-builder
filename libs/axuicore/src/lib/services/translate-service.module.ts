/*
 * Copyright (c) 2019-2022 Takaq. All Rights Reserved.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// this module allows TranslateService to be injected in both client and exuicore
@NgModule()
export class TranslateServiceModule
{

  static forRoot (): ModuleWithProviders<TranslateServiceModule>
  {
    return TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    });
  }

}

// required for AOT compilation
export function HttpLoaderFactory (http: HttpClient)
{
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
