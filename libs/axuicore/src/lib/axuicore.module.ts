/*
 * Copyright (c) 2019-2025 Takaq. All Rights Reserved.
 */
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { MaterialModule } from '@nxwork/material';

// import {NgChartsModule} from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import { AppService } from './app.service';
import { ElectronService } from 'ngx-electron';

// Ax Components
import { AxButtonComponent } from './controls/ax-button/ax-button.component';

// Ax Components
export const axComponents = [
  AxButtonComponent,
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
    ...axComponents,
  ],
  declarations: [
  ],
  exports: [
    ...axComponents,
  ],
  providers: [
    DatePipe,
    AppService,
    ElectronService,
  ]
})
export class AxuicoreModule { } 
