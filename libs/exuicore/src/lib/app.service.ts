/*
 * Copyright (c) 2021-2023 Takaq. All Rights Reserved.
 */

import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService
{

  private _dateFormat = 'M/d/yyyy';
  private _timeFormat = 'h:mm a';

  get dateFormat (): string
  {
    return this._dateFormat;
  }

  set dateFormat (value: string)
  {
    this._dateFormat = value;
  }

  get timeFormat (): string
  {
    return this._timeFormat;
  }

  set timeFormat (value: string)
  {
    this._timeFormat = value;
  }

}
