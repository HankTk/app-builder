/*
 * Copyright (c) 2020-2023 Takaq. All Rights Reserved.
 */
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MomentModule} from 'ngx-moment';
import {MaterialModule} from '@nxwork/material';

// import {NgChartsModule} from 'ng2-charts';
import {BaseChartDirective} from 'ng2-charts';
import { AppService } from './app.service';
import { ElectronService } from 'ngx-electron';

// Ex Components
import {ExButtonComponent} from './control/ex-button/ex-button.component';

// Ex Components
export const exComponents = [
  ExButtonComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    MomentModule,
    BaseChartDirective,
  ],
  declarations: [
    ...exComponents,
  ],
  exports: [
    ...exComponents,
  ],
  providers: [
    DatePipe,
    AppService,
    ElectronService,
  ]
})
export class ExuicoreModule
{
}
