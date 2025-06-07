import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MaterialModule } from '@nxwork/material';
import { AxuicoreModule } from '@nxwork/axuicore';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { LogoComponent } from '../logo/logo.component';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    AxuicoreModule,
    SideMenuComponent,
    LogoComponent
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('drawer') drawer: MatDrawer | undefined;

  showFiller = false;

  public onItemSelected(event: any, d: any): void {
    // @ts-ignore
    // this.drawer.close();
    d.close();
  }

}
