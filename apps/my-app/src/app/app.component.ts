import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

import {ContainerLayoutComponent} from "./components/container-layout/container-layout.component";
import {ColorSchemeService} from "./services/color-scheme.service";
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerLayoutComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    public colorSchemaService: ColorSchemeService
  ) {
  }
  ngOnInit() {
    // Translation
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    // Color Scheme
    this.colorSchemaService._detectPrefersColorScheme();
    this.setTheme(this.colorSchemaService.currentActive());
  }

  setTheme(theme: string) {
    this.colorSchemaService.update(theme);
  }

}

export function getResourceKey(resourceKey: string): string {
  if (resourceKey.includes('.value')) {
    return resourceKey;
  }
  else {
    return resourceKey + '.value';
  }
}
