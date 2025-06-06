/*
 * Copyright (c) 2019 Takaq. All Rights Reserved.
 */

import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({template: '', standalone: false})
export class AbstractExControlComponent
{

  protected translate!: TranslateService;

  constructor ()
  {
  }

  //@ts-ignore
  protected doTranslate (resourceKey: string|number): string
  {
    if (resourceKey === undefined || resourceKey == null) {
      return '';
    }
    resourceKey = resourceKey.toString();
    if (this.translate === undefined) {
      return resourceKey;
    }
    if (resourceKey.length > 0) {
      return this.translate.instant(resourceKey);
    }
  }

  protected setStyle (style: any): any
  {
    const styleObject: any = {};
    if (style === undefined) {
      return styleObject;
    }
    const styleArray = style.split(';');
    for (let i = 0; i < styleArray.length; i++) {
      const entry = styleArray[i].split(':');
      if ((entry[0].trim() !== '') && (entry[0].trim() !== undefined)) {
        styleObject[entry[0].trim()] = entry[1].trim();
      }
    }
    return styleObject;
  }

}
