import {Component} from '@angular/core';
import {ColorSchemeService} from '../../../services/color-scheme.service';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-setting-change-color-scheme',
  standalone: true,
  templateUrl: './setting-change-color-scheme.component.html',
  imports: [MatListModule, MatIconModule, NgForOf],
  styleUrls: ['./setting-change-color-scheme.component.scss'],
})
export class SettingChangeColorSchemeComponent {
  public themes = [
    {
      name: 'dark',
      icon: 'brightness_3',
    },
    {
      name: 'light',
      icon: 'wb_sunny',
    },
  ];

  constructor(public colorSchemeService: ColorSchemeService) {}

  setTheme(theme: string) {
    this.colorSchemeService.update(theme);
  }
}
