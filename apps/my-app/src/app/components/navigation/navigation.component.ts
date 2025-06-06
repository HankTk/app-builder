import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { LogoComponent } from "../logo/logo.component";
import { ThemeComponent } from "../theme/theme.component";
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, LogoComponent, ThemeComponent, MenuComponent],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {}
