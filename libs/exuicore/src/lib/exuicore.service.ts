/*
 * Copyright (c) 2019 Takaq. All Rights Reserved.
 */

import {Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ExuicoreService
{

  private _location!: Location;
  private _router!: Router;

  constructor ()
  {
  }

  public setRouter (router: Router)
  {
    this._router = router;
  }

  public getRouter (): Router
  {
    return this._router;
  }

  public setLocation (location: Location)
  {
    this._location = location;
  }

  public getLocation (): Location
  {
    return this._location;
  }

}
