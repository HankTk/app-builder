import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  SettingChangeColorSchemeComponent
} from "../settings/setting-change-color-scheme/setting-change-color-scheme.component";
import { MaterialModule } from '@nxwork/material';
import { AxuicoreModule } from '@nxwork/axuicore';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [
    CommonModule,
    SettingChangeColorSchemeComponent,
    MaterialModule,
    AxuicoreModule
  ],
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent {
  showFiller = false;
}
