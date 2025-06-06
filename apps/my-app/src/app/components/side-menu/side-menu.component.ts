import { Component, EventEmitter, Output } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { NgForOf } from "@angular/common";
import { LogoComponent } from '../logo/logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeComponent } from '../theme/theme.component';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  templateUrl: './side-menu.component.html',
  imports: [MatListModule, MatIconModule, NgForOf, LogoComponent, RouterLink, RouterLinkActive, ThemeComponent],
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {

  @Output()
  public itemSelected = new EventEmitter();

  constructor(
  ) {}

  public onItemSelect(event: any): void {
    this.itemSelected.emit();
  }

}
