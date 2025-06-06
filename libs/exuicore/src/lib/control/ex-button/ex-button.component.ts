/*
 * Copyright (c) 2019-2023 Takaq. All Rights Reserved.
 */

import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ex-button',
  standalone: false,
  templateUrl: './ex-button.component.html',
  styleUrls: ['./ex-button.component.scss', './_ex-button.theme.scss'],
})
export class ExButtonComponent implements OnInit, OnChanges {

  @Input()
  label = 'Label';

  @Input()
  labelNumber = -1;

  @Input()
  id = '';

  @Input()
  color = '';

  @Input()
  disabled = false;

  @Input()
  icon = '';

  @Input()
  nxClass: any;

  @Input()
  style: any;

  @Input()
  noLabel = false;

  @Input()
  public minFontSize = 18;

  @Input()
  public maxFontSize = 24;

  @Output()
  clicked = new EventEmitter();

  public styleObject = {};

  public displayText = '';

  public ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  public ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public onClick(event: Event): void {
    if (this.disabled) {
      event.stopPropagation();
      return;
    }
    this.clicked.emit();
  }

}

