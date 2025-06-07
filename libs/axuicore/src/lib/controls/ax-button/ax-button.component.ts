/*
 * Copyright (c) 2019-2025 Takaq. All Rights Reserved.
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
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ax-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './ax-button.component.html',
  styleUrls: [
    './ax-button.component.scss',
    './_ax-button.theme.scss'
  ],
})
export class AxButtonComponent implements OnInit, OnChanges {

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
